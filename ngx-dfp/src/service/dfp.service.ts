import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Observable, Subject, Subscription, timer } from 'rxjs';
import { bufferTime, debounce, filter } from 'rxjs/operators';

import {
  ScriptOptions, RefreshOptions, EventTypes, Event, ImpressionViewableEvent,
  SlotOnloadEvent, SlotRenderEndedEvent, SlotRequestedEvent, SlotResponseReceived, SlotVisibilityChangedEvent
} from '../types';
import { DfpAdDirective } from '../directive/dfp-ad.directive';

// https://developers.google.com/publisher-tag/guides/general-best-practices
const GPT_SOURCE = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
const DFP_DEFINE_ID = 'ngx-dfp';

@Injectable()
export class DfpService {

  private _events = new Subject<Event>();
  get events(): Observable<Event> {
    return this._events.asObservable();
  }

  private debounceRefresh = new Subject<RefreshOptions>();
  private refreshQueue = new Subject<DfpAdDirective>();
  private onSameNavigation: Subscription | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) {
    this.initializeGPT();
    this.pendingRefresh();
    this.addEventListeners();
  }

  clear(elementIds?: string[]) {
    googletag.cmd.push(() => {
      googletag.pubads().clear(this.getSlots(elementIds));
    });
  }

  cmd(callback: () => void) {
    googletag.cmd.push(callback);
  }

  destroySlots(elementIds?: string[]) {
    googletag.cmd.push(() => {
      googletag.destroySlots(this.getSlots(elementIds));
    });
  }

  getSlots(elementIds?: string[]) {
    if (!googletag.apiReady) {
      return [];
    }
    const slots = googletag.pubads().getSlots();
    if (elementIds) {
      return slots.filter(slot => elementIds.indexOf(slot.getSlotElementId()) !== -1);
    }
    return slots;
  }

  push(slot: DfpAdDirective) {
    this.refreshQueue.next(slot);
  }

  refresh(elementIds?: string[], opt_options?: { changeCorrelator: boolean }) {
    this.debounceRefresh.next({ slots: this.getSlots(elementIds), opt_options: opt_options });
  }

  /**
   * Fetches and displays all slots on the page OnSameNavigation
   */
  refreshOnSameNavigation(refresh = true) {
    if (this.onSameNavigation && !this.onSameNavigation.closed) {
      this.onSameNavigation.unsubscribe();
    }
    if (refresh) {
      this.onSameNavigation = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
      ).subscribe(() => {
        this.refresh();
      });
    }
  }

  /**
   * Append script preload tag: \<link ref="preload" href="src" as="script"\>
   * @param src
   * @returns
   */
  preloadScript(src: string) {
    const preload: HTMLLinkElement = this.document.createElement('link');
    Object.assign(preload, { rel: 'preload', href: src, as: 'script' });
    this.document.head.appendChild(preload);
    return preload;
  }

  /**
   * Append Script tag to parentNode
   * @param options
   * @param parentNode The default setting is document.head
   * @returns
   */
  appendScript(options: ScriptOptions, parentNode?: Element) {
    parentNode = parentNode || this.document.head;
    const oldScript = options.id ? parentNode.querySelector('#' + options.id) : null;
    const script: HTMLScriptElement = this.document.createElement('script');
    Object.assign(script, options, {
      type: 'text/javascript'
    });
    if (oldScript) {
      parentNode.replaceChild(script, oldScript);
    } else {
      parentNode.appendChild(script);
    }
    return script;
  }

  /**
   * Append Script tag to parentNode with `googletag.cmd.push(function(){???})`
   * @param options
   * @param parentNode
   * @returns
   */
  appendCmdScript(options: ScriptOptions, parentNode?: Element) {
    const opts = Object.assign({}, options, {
      innerHTML: 'googletag.cmd.push(function(){' + options.innerHTML + '});'
    });
    return this.appendScript(opts, parentNode);
  }

  private initializeGPT() {
    this.preloadScript(GPT_SOURCE);
    this.appendScript({ async: true, src: GPT_SOURCE });
    this.appendScript({ innerHTML: 'window.googletag = window.googletag || {cmd: []};' });
    this.appendScript({ id: DFP_DEFINE_ID, innerHTML: '' });
  }

  private pendingRefresh() {
    this.refreshQueue.pipe(
      bufferTime(200),
      filter(slots => slots.length > 0)
    ).subscribe((slots) => {
      this.destroySlots();
      this.define(slots);
      this.refresh();
    });

    this.refreshOnSameNavigation();

    this.debounceRefresh.pipe(
      debounce(() => timer(1000))
    ).subscribe((options) => {
      googletag.cmd.push(() => {
        googletag.pubads().refresh(options.slots, options.opt_options);
      });
    });
  }

  private addEventListeners() {
    Object.keys(EventTypes).forEach(type => {
      googletag.cmd.push(() => {
        const eventType = (EventTypes as any)[type];
        googletag.pubads().addEventListener(eventType, (e: googletag.events.Event) => {
          let event = new Event();
          switch (eventType) {
            case EventTypes.ImpressionViewableEvent:
              event = new ImpressionViewableEvent();
              break;
            case EventTypes.SlotOnloadEvent:
              event = new SlotOnloadEvent();
              break;
            case EventTypes.SlotRenderEndedEvent:
              event = new SlotRenderEndedEvent();
              break;
            case EventTypes.SlotRequestedEvent:
              event = new SlotRequestedEvent();
              break;
            case EventTypes.SlotResponseReceived:
              event = new SlotResponseReceived();
              break;
            case EventTypes.SlotVisibilityChangedEvent:
              event = new SlotVisibilityChangedEvent();
              break;
          }
          this._events.next(Object.assign(event, e));
        });
      });
    });
  }

  private define(dfpAds: DfpAdDirective[]) {
    const ids: string[] = [];
    dfpAds.forEach((ad, index) => {
      ad.id = ad.id || ad.element?.id || '';
      if (!ad.id || ids.indexOf(ad.id) !== -1) {
        ad.id = 'dfp-ad-' + (index + Math.random()).toString();
      }
      ids.push(ad.id);
    });

    const enableServices = [
      'googletag.pubads().disableInitialLoad();',
      'googletag.pubads().enableAsyncRendering();',
      'googletag.enableServices();',
    ];
    const defines: string[] = [];
    dfpAds.forEach((ad, index) => {
      if (ad.content) {
        defines.push('var slot' + index + '=googletag.defineSlot("' + ad.adUnitPath + '", ' + JSON.stringify(ad.size) + ', "' + ad.id + '").addService(googletag.content());');
        enableServices.push('googletag.content().setContent(slot' + index + ', ' + JSON.stringify(ad.content) + ');');
      } else {
        defines.push(this.getSlotDefineScript(ad));
      }
    });
    this.appendCmdScript({
      id: DFP_DEFINE_ID,
      innerHTML: defines.concat(enableServices).join("\n")
    });

    dfpAds.forEach(ad => {
      ad.element?.setAttribute('id', ad.id);
      this.appendCmdScript({
        innerHTML: 'googletag.display("' + ad.id + '");'
      }, ad.element);
    });
  }

  private getSlotDefineScript(ad: DfpAdDirective) {
    const scripts = [];

    if (ad.size) {
      scripts.push('googletag.defineSlot("' + ad.adUnitPath + '",' + JSON.stringify(ad.size) + ',"' + ad.id + '")');
    } else {
      scripts.push('googletag.defineOutOfPageSlot("' + ad.adUnitPath + '","' + ad.id + '")');
    }

    if (ad.sizeMapping) {
      const mappingScripts = [
        '.defineSizeMapping(googletag.sizeMapping()'
      ];
      mappingScripts.push(ad.sizeMapping.map(value => {
        return '.addSize(' + JSON.stringify(value[0]) + ', ' + JSON.stringify(value[1]) + ')';
      }).join(''));
      mappingScripts.push('.build())');
      scripts.push(mappingScripts.join(''));
    }

    if (ad.targeting) {
      scripts.push(Object.keys(ad.targeting).map((key) => {
        return '.setTargeting("' + key + '", ' + JSON.stringify(ad.targeting[key]) + ')';
      }).join(''));
    }

    if (ad.collapseEmptyDiv !== undefined) {
      scripts.push('.setCollapseEmptyDiv(' + ad.collapseEmptyDiv + ')');
    }

    if (ad.clickUrl) {
      scripts.push('.setClickUrl("' + ad.clickUrl + '")');
    }

    scripts.push('.addService(googletag.pubads())');

    return scripts.join("\n    ") + ';';
  }
}
