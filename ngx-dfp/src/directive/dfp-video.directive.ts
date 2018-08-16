import { Directive, Inject, PLATFORM_ID, ElementRef, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { loadImaSdk } from '@alugha/ima';

import { DfpIDGeneratorService } from '../service/dfp-id-generator.service';

@Directive({
  selector: 'dfp-video'
})
export class DfpVideoDirective implements OnInit {

  @Input() width: number;
  @Input() height: number;

  @Input() adTag: string;
  @Input() adActions: EventEmitter<'play' | 'pause' | 'resume'>;

  @Output() adEvents = new EventEmitter<any>();

  contentPlayer: HTMLVideoElement;
  adContainer: HTMLElement;

  private contentCompleteCalled: boolean;
  private adDisplayContainer: google.ima.AdDisplayContainer;
  private adsLoader: google.ima.AdsLoader;
  private adsManager: google.ima.AdsManager;
  private adsDone = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private dfpIDGenerator: DfpIDGeneratorService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      const el = this.elementRef.nativeElement;

      this.dfpIDGenerator.dfpIDGenerator(el);

      this.contentPlayer = el.querySelector('video');
      this.renderer.setAttribute(this.contentPlayer, 'width', this.width.toString());
      this.renderer.setAttribute(this.contentPlayer, 'height', this.height.toString());

      this.adContainer = el.querySelector('.ad-container');
      if (!this.adContainer) {
        this.adContainer = this.renderer.createElement('div');
        this.renderer.addClass(this.adContainer, 'ad-container');
        this.renderer.appendChild(el, this.adContainer);
      }

      // ima setup
      loadImaSdk().then(() => this.setUpIMA());

      // simple control
      this.adActions.subscribe(act => {
        switch (act) {
          case 'play':
            this.play();
            break;
          case 'pause':
            this.pause();
            break;
          case 'resume':
            this.resume();
            break;
        }
      });
    }
  }

  play() {
    if (!this.adsDone) {
      this.initialUserAction();
      this.loadAds();
      this.adsDone = true;
    }
  }

  pause() {
    if (this.adsManager) {
      this.adsManager.pause();
    }
  }

  resume() {
    if (this.adsManager) {
      this.adsManager.resume();
    }
  }

  setUpIMA() {
    // Create the ad display container.
    this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainer, this.contentPlayer);
    // Create ads loader.
    this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
    // Listen and respond to ads loaded and error events.
    this.adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      event => this.onAdsManagerLoaded(event),
      false);
    this.adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      event => this.onAdError(event),
      false);

    // An event listener to tell the SDK that our content video
    // is completed so the SDK can play any post-roll ads.
    this.contentPlayer.onended = () => {
      this.contentEnded();
    };
  }

  initialUserAction() {
    this.adDisplayContainer.initialize();
    this.contentPlayer.load();
  }

  requestAds(adTagUrl) {
    const adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = adTagUrl;
    adsRequest.linearAdSlotWidth = this.width;
    adsRequest.linearAdSlotHeight = this.height;
    adsRequest.nonLinearAdSlotWidth = this.width;
    adsRequest.nonLinearAdSlotHeight = this.height;
    this.adsLoader.requestAds(adsRequest);
  }

  contentEnded() {
    this.contentCompleteCalled = true;
    this.adsLoader.contentComplete();
  }

  onAdsManagerLoaded(adsManagerLoadedEvent) {
    const adsRenderingSettings = new google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    this.adsManager = adsManagerLoadedEvent.getAdsManager(
      this.contentPlayer, adsRenderingSettings);
    this.startAdsManager(this.adsManager);
  }

  startAdsManager(adsManager) {
    // Attach the pause/resume events.
    adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
      () => this.onContentPauseRequested(),
      false,
      this);
    adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
      () => this.onContentResumeRequested(),
      false,
      this);
    // Handle errors.
    adsManager.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      event => this.onAdError(event),
      false,
      this);
    const events = [google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
    google.ima.AdEvent.Type.CLICK,
    google.ima.AdEvent.Type.COMPLETE,
    google.ima.AdEvent.Type.FIRST_QUARTILE,
    google.ima.AdEvent.Type.LOADED,
    google.ima.AdEvent.Type.MIDPOINT,
    google.ima.AdEvent.Type.PAUSED,
    google.ima.AdEvent.Type.STARTED,
    google.ima.AdEvent.Type.THIRD_QUARTILE];
    events.forEach(event =>
      adsManager.addEventListener(event, adEvent => this.onAdEvent(adEvent), false)
    );

    adsManager.init(
      this.width,
      this.height,
      google.ima.ViewMode.NORMAL);

    adsManager.start();
  }

  onContentPauseRequested() {
    this.pauseForAd();
  }

  onContentResumeRequested() {
    // Without this check the video starts over from the beginning on a
    // post-roll's CONTENT_RESUME_REQUESTED
    if (!this.contentCompleteCalled) {
      this.resumeAfterAd();
    }
  }

  onAdEvent(adEvent) {
    if (adEvent.type === google.ima.AdEvent.Type.LOADED) {
      const ad = adEvent.getAd();
      if (!ad.isLinear()) {
        this.onContentResumeRequested();
      }
    }
    this.adEvents.emit(adEvent);
  }

  onAdError(adErrorEvent) {
    if (this.adsManager) {
      this.adsManager.destroy();
    }
    this.resumeAfterAd();
    this.adEvents.emit(adErrorEvent);
  }

  // application functions

  resumeAfterAd() {
    this.contentPlayer.play();
  }

  pauseForAd() {
    this.contentPlayer.pause();
  }

  loadAds() {
    this.requestAds(this.adTag);
  }

}
