import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { DfpService, EventTypes, ImpressionViewableEvent, SlotOnloadEvent, SlotRenderEndedEvent, SlotRequestedEvent, SlotResponseReceived, SlotVisibilityChangedEvent } from 'ngx-dfp';
import { takeWhile } from 'rxjs/operators';
import { SAMPLES } from '../const';

type CurrentSample = {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss'],
})
export class SamplesComponent implements OnDestroy {

  current!: CurrentSample;

  /**
   * Cookies are enabled by default. Set cookie options to 1 to disable.
   */
  cookiesEnabled = 1;
  /**
   * Personalized ad serving is enabled by default. Set "request non-personalized ads" to 1 to disable.
   */
  personalizedAdsDisabled = 1;

  eventsStatus: any[] = [];

  privacyConfig: googletag.PrivacySettingsConfig = {
    childDirectedTreatment: undefined,
    limitedAds: undefined,
    restrictDataProcessing: undefined,
    underAgeOfConsent: undefined
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dfp: DfpService,
    title: Title,
    route: ActivatedRoute,
  ) {
    route.params.subscribe(params => {
      const sample = SAMPLES.base.find(v => v[0] == params.current)
        || SAMPLES.advanced.find(v => v[0] == params.current);
      if (sample) {
        this.current = {
          id: sample[0],
          name: sample[1],
          description: sample[2],
        }
        title.setTitle(this.current.name);
        this.resetDefaultOptions();
      }
    });
  }

  ngOnDestroy() {
    this.current.id = '';
  }

  resetDefaultOptions() {
    switch (this.current.id) {
      case 'configure-cookies':
        this.dfp.pushCmd(() => {
          googletag.pubads().setCookieOptions(this.cookiesEnabled);
        });
        break;
      case 'configure-personalized-ads':
        this.dfp.pushCmd(() => {
          googletag.pubads().setRequestNonPersonalizedAds(this.personalizedAdsDisabled);
        });
        break;
      case 'ad-event-listeners':
        this.addEventListeners();
        break;
      case 'collapse-empty-ad-slots':
        this.dfp.pushCmd(() => {
          googletag.pubads().collapseEmptyDivs();
          googletag.pubads().enableSingleRequest();
        });
        break;
      case 'lazy-loading':
        this.dfp.pushCmd(() => {
          // A) Enable with defaults.
          googletag.pubads().enableLazyLoad();
          // B) Enable without lazy fetching. Additional calls override previous
          // ones.
          googletag.pubads().enableLazyLoad({ fetchMarginPercent: -1 });
          // C) Enable lazy loading with...
          googletag.pubads().enableLazyLoad({
            // Fetch slots within 5 viewports.
            fetchMarginPercent: 500,
            // Render slots within 2 viewports.
            renderMarginPercent: 200,
            // Double the above values on mobile, where viewports are smaller
            // and users tend to scroll faster.
            mobileScaling: 2.0
          });
        });
        this.dfp.events.pipe(
          takeWhile(() => 'lazy-loading' === this.current.id)
        ).subscribe(event => {
          const slotId = event.slot.getSlotElementId();
          let el: HTMLElement | null = null;
          if (event instanceof SlotRequestedEvent) {
            el = this.document.getElementById(slotId + '-' + 'fetched');
          } else if (event instanceof SlotOnloadEvent) {
            el = this.document.getElementById(slotId + '-' + 'rendered');
          }
          if (el) { el.className = 'activated'; el.innerText = 'Yes'; }
        });
        break;
      case 'display-out-of-page-ad':
      case 'refresh':
        this.dfp.pushCmd(() => {
          googletag.pubads().enableSingleRequest();
        });
        break;
    }
  }

  toggleCookieOptions() {
    this.cookiesEnabled = this.cookiesEnabled === 1 ? 0 : 1;
    googletag.pubads().setCookieOptions(this.cookiesEnabled);
    googletag.pubads().refresh();
  }

  toggleRequestNonPersonalizedAds() {
    this.personalizedAdsDisabled = this.personalizedAdsDisabled === 1 ? 0 : 1;
    googletag.pubads().setRequestNonPersonalizedAds(this.personalizedAdsDisabled);
    googletag.pubads().refresh();
  }

  configurePrivacy() {
    googletag.pubads().setPrivacySettings(this.privacyConfig);
    googletag.pubads().refresh();
  }

  addEventListeners() {
    this.eventsStatus = [];
    this.dfp.events.pipe(
      takeWhile(() => 'ad-event-listeners' === this.current.id)
    ).subscribe(event => {
      console.log(event)
      let eventType = '';
      let details = null;
      if (event instanceof ImpressionViewableEvent) {
        eventType = EventTypes.ImpressionViewableEvent;
      } else if (event instanceof SlotOnloadEvent) {
        eventType = EventTypes.SlotOnloadEvent;
      } else if (event instanceof SlotRenderEndedEvent) {
        eventType = EventTypes.SlotRenderEndedEvent;
        details = [
          'Advertiser ID: ' + event.advertiserId,
          'Campaign ID: ' + event.campaignId,
          'Creative ID: ' + event.creativeId,
          'Is empty?: ' + event.isEmpty,
          'Line Item ID: ' + event.lineItemId,
          'Size: ' + event.size,
          'Source Agnostic Creative ID: ' + event.sourceAgnosticCreativeId,
          'Source Agnostic Line Item ID: ' + event.sourceAgnosticLineItemId
        ];
      } else if (event instanceof SlotRequestedEvent) {
        eventType = EventTypes.SlotRequestedEvent;
      } else if (event instanceof SlotResponseReceived) {
        eventType = EventTypes.SlotResponseReceived;
      } else if (event instanceof SlotVisibilityChangedEvent) {
        eventType = EventTypes.SlotVisibilityChangedEvent;
        details = ['Visible area: ' + event.inViewPercentage + '%'];
      }
      this.eventsStatus.push([
        event.slot.getSlotElementId(),
        eventType,
        details
      ]);
    });
  }

  refresh(slotId?: string) {
    if (slotId) {
      const slot = googletag.pubads().getSlots().find(slot => slot.getSlotElementId() === slotId) as googletag.Slot;
      this.dfp.refresh([slot]);
    } else {
      this.dfp.refresh();
    }
  }

  clear() {
    this.dfp.clear();
  }
}
