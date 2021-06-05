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

  /**
   * Removes the ads from the given slots and replaces them with blank content.
   */
  clear(slots?: googletag.Slot[]) {
    googletag.cmd.push(() => {
      googletag.destroySlots(slots);
      googletag.pubads().clear(slots);
    });
  }

  /**
   * googletag.cmd.push
   */
  pushCmd(callback: Function) {
    googletag.cmd.push(() => {
      callback();
    });
  }

  /**
   * Push DfpAdDirective to the pending queue.
   */
  push(slot: DfpAdDirective) {
    this.refreshQueue.next(slot);
  }

  /**
   * Fetches and displays new ads for specific or all slots on the page.
   * Minimum interval time takes 1 second.
   */
  refresh(slots?: googletag.Slot[], opt_options?: { changeCorrelator: boolean }) {
    this.debounceRefresh.next({ slots: slots, opt_options: opt_options });
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
      if (googletag.pubadsReady) {
        this.clear();
      }
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

    const tab = '  ';
    const separator = "\n" + tab + tab;

    if (ad.size) {
      scripts.push('googletag.defineSlot("' + ad.adUnitPath + '",' + JSON.stringify(ad.size) + ',"' + ad.id + '")');
    } else {
      scripts.push('googletag.defineOutOfPageSlot("' + ad.adUnitPath + '","' + ad.id + '")');
    }

    if (ad.clickUrl) {
      scripts.push(separator + '.setClickUrl("' + ad.clickUrl + '")');
    }
    if (ad.collapseEmptyDiv) {
      scripts.push(separator + '.setCollapseEmptyDiv(googletag.pubads(' + JSON.stringify(ad.collapseEmptyDiv) + '))');
    }

    scripts.push(separator + '.addService(googletag.pubads())');

    if (ad.sizeMapping) {
      const mappingScripts = [
        '.defineSizeMapping(googletag.sizeMapping()'
      ];
      mappingScripts.push(ad.sizeMapping.map(value => {
        return '.addSize(' + JSON.stringify(value[0]) + ', ' + JSON.stringify(value[1]) + ')';
      }).join(''));
      mappingScripts.push('.build())');
      scripts.push(separator + mappingScripts.join(''));
    }

    scripts.push(separator + Object.keys(ad.targeting).map((key) => {
      return '.setTargeting("' + key + '", ' + JSON.stringify(ad.targeting[key]) + ')';
    }).join(''));

    return scripts.join('') + ';';
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

  appendCmdScript(options: ScriptOptions, parentNode?: Element) {
    const opts = Object.assign({}, options, {
      innerHTML: 'googletag.cmd.push(function(){' + options.innerHTML + '});'
    });
    return this.appendScript(opts, parentNode);
  }

  get events(): Observable<Event> {
    return this._events.asObservable();
  }
}
