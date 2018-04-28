import {
  Directive, ElementRef,
  Input, Output, EventEmitter,
  OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { DfpService, DfpIDGeneratorService, DfpRefreshService } from '../service';

import { DFPIncompleteError, GoogleSlot } from '../class';

declare var googletag;

export class DfpRefreshEvent {
  type: string;
  slot: any;
  data?: any;
}

@Directive({
  selector: 'dfp-ad'
})
export class DfpAdDirective implements OnInit, AfterViewInit, OnDestroy {

  @Input() adUnit: string;
  @Input() clickUrl: string;
  @Input() forceSafeFrame: boolean;
  @Input() safeFrameConfig: string;
  @Input() refresh: string;
  @Input() collapseIfEmpty: boolean;

  @Output() afterRefresh: EventEmitter<DfpRefreshEvent> = new EventEmitter();

  private sizes = [];

  private responsiveMapping = [];

  private targetings = [];

  private exclusions = [];

  private scripts = [];

  private slot: GoogleSlot;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef,
    private dfp: DfpService,
    private dfpIDGenerator: DfpIDGeneratorService,
    private dfpRefresh: DfpRefreshService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.dfpRefresh.refreshEvent.subscribe(slot => {
        if (slot === this.slot) {
          this.afterRefresh.emit({ type: 'refresh', slot: slot });
        }
      });
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.dfpIDGenerator.dfpIDGenerator(this.elementRef.nativeElement);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.dfp.defineTask(() => {
        this.defineSlot();
      });
    }
  }

  ngOnDestroy() {
    if (this.slot) {
      googletag.destroySlots([this.slot]);
    }
  }

  private setResponsiveMapping(slot) {
    const ad = this.getState();

    const sizeMapping = googletag.sizeMapping();

    if (ad.responsiveMapping.length === 0) {
      ad.sizes.forEach(function (size) {
        sizeMapping.addSize([size[0], 0], [size]);
      });
    } else {
      ad.responsiveMapping.forEach(function (mapping) {
        sizeMapping.addSize(mapping.viewportSize, mapping.adSizes);
      });
    }

    slot.defineSizeMapping(sizeMapping.build());
  }

  private defineSlot() {
    const ad = this.getState(),
      element = this.elementRef.nativeElement;

    this.slot = googletag.defineSlot(ad.adUnit, ad.sizes, element.id);

    if (ad.forceSafeFrame !== undefined) {
      this.slot.setForceSafeFrame(true);
    }

    if (ad.clickUrl) {
      this.slot.setClickUrl(ad.clickUrl);
    }

    if (ad.collapseIfEmpty) {
      this.slot.setCollapseEmptyDiv(true, true);
    }

    if (ad.safeFrameConfig) {
      this.slot.setSafeFrameConfig(
        (JSON.parse(ad.safeFrameConfig))
      );
    }

    this.slot.renderEnded = (googleSlotEvent: IArguments) => {
      this.afterRefresh.emit({ type: 'renderEnded', slot: this.slot, data: googleSlotEvent });
    };

    this.setResponsiveMapping(this.slot);

    ad.targetings.forEach(targeting => {
      this.slot.setTargeting(targeting.key, targeting.values);
    });

    ad.exclusions.forEach(exclusion => {
      this.slot.setCategoryExclusion(exclusion);
    });

    ad.scripts.forEach(script => { script(this.slot); });

    this.slot.addService(googletag.pubads());

    this.refreshContent();
  }

  private refreshContent() {
    this.dfpRefresh.slotRefresh(this.slot, this.refresh, true).then(slot => {
      this.afterRefresh.emit({ type: 'init', slot: slot });
    });
  }

  checkValid() {
    if (this.sizes.length === 0) {
      throw new DFPIncompleteError('dfp-ad', 'dfp-size');
    }
    if (!this.adUnit) {
      throw new DFPIncompleteError('dfp-ad', 'ad-unit', true);
    }
  }

  get isHidden() {
    return this.dfpRefresh.hiddenCheck(this.elementRef.nativeElement);
  }

  getState() {
    this.checkValid();
    return Object.freeze({
      sizes: this.sizes,
      responsiveMapping: this.responsiveMapping,
      targetings: this.targetings,
      exclusions: this.exclusions,
      adUnit: this.adUnit,
      forceSafeFrame: this.forceSafeFrame === true,
      safeFrameConfig: this.safeFrameConfig,
      clickUrl: this.clickUrl,
      refresh: this.refresh,
      scripts: this.scripts,
      collapseIfEmpty: this.collapseIfEmpty === true
    });
  }

  addSize(size) {
    this.sizes.push(size);
  }

  addResponsiveMapping(mapping) {
    this.responsiveMapping.push(mapping);
  }

  addTargeting(targeting) {
    this.targetings.push(targeting);
  }

  addExclusion(exclusion) {
    this.exclusions.push(exclusion);
  }

  addScript(script) {
    this.scripts.push(script);
  }

}
