"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ima_1 = require("@alugha/ima");
var service_1 = require("../service");
var DfpVideoDirective = /** @class */ (function () {
    function DfpVideoDirective(platformId, elementRef, renderer, dfpIDGenerator) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dfpIDGenerator = dfpIDGenerator;
        this.adEvents = new core_1.EventEmitter();
        this.adsDone = false;
    }
    DfpVideoDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
            var el = this.elementRef.nativeElement;
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
            ima_1.loadImaSdk().then(function () { return _this.setUpIMA(); });
            // simple control
            this.adActions.subscribe(function (act) {
                switch (act) {
                    case 'play':
                        _this.play();
                        break;
                    case 'pause':
                        _this.pause();
                        break;
                    case 'resume':
                        _this.resume();
                        break;
                }
            });
        }
    };
    DfpVideoDirective.prototype.play = function () {
        if (!this.adsDone) {
            this.initialUserAction();
            this.loadAds();
            this.adsDone = true;
        }
    };
    DfpVideoDirective.prototype.pause = function () {
        if (this.adsManager) {
            this.adsManager.pause();
        }
    };
    DfpVideoDirective.prototype.resume = function () {
        if (this.adsManager) {
            this.adsManager.resume();
        }
    };
    DfpVideoDirective.prototype.setUpIMA = function () {
        var _this = this;
        // Create the ad display container.
        this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainer, this.contentPlayer);
        // Create ads loader.
        this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
        // Listen and respond to ads loaded and error events.
        this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (event) { return _this.onAdsManagerLoaded(event); }, false);
        this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (event) { return _this.onAdError(event); }, false);
        // An event listener to tell the SDK that our content video
        // is completed so the SDK can play any post-roll ads.
        this.contentPlayer.onended = function () {
            _this.contentEnded();
        };
    };
    DfpVideoDirective.prototype.initialUserAction = function () {
        this.adDisplayContainer.initialize();
        this.contentPlayer.load();
    };
    DfpVideoDirective.prototype.requestAds = function (adTagUrl) {
        var adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = adTagUrl;
        adsRequest.linearAdSlotWidth = this.width;
        adsRequest.linearAdSlotHeight = this.height;
        adsRequest.nonLinearAdSlotWidth = this.width;
        adsRequest.nonLinearAdSlotHeight = this.height;
        this.adsLoader.requestAds(adsRequest);
    };
    DfpVideoDirective.prototype.contentEnded = function () {
        this.contentCompleteCalled = true;
        this.adsLoader.contentComplete();
    };
    DfpVideoDirective.prototype.onAdsManagerLoaded = function (adsManagerLoadedEvent) {
        var adsRenderingSettings = new google.ima.AdsRenderingSettings();
        adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        this.adsManager = adsManagerLoadedEvent.getAdsManager(this.contentPlayer, adsRenderingSettings);
        this.startAdsManager(this.adsManager);
    };
    DfpVideoDirective.prototype.startAdsManager = function (adsManager) {
        var _this = this;
        // Attach the pause/resume events.
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function () { return _this.onContentPauseRequested(); }, false, this);
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function () { return _this.onContentResumeRequested(); }, false, this);
        // Handle errors.
        adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (event) { return _this.onAdError(event); }, false, this);
        var events = [google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
            google.ima.AdEvent.Type.CLICK,
            google.ima.AdEvent.Type.COMPLETE,
            google.ima.AdEvent.Type.FIRST_QUARTILE,
            google.ima.AdEvent.Type.LOADED,
            google.ima.AdEvent.Type.MIDPOINT,
            google.ima.AdEvent.Type.PAUSED,
            google.ima.AdEvent.Type.STARTED,
            google.ima.AdEvent.Type.THIRD_QUARTILE];
        events.forEach(function (event) {
            return adsManager.addEventListener(event, function (adEvent) { return _this.onAdEvent(adEvent); }, false);
        });
        adsManager.init(this.width, this.height, google.ima.ViewMode.NORMAL);
        adsManager.start();
    };
    DfpVideoDirective.prototype.onContentPauseRequested = function () {
        this.pauseForAd();
    };
    DfpVideoDirective.prototype.onContentResumeRequested = function () {
        // Without this check the video starts over from the beginning on a
        // post-roll's CONTENT_RESUME_REQUESTED
        if (!this.contentCompleteCalled) {
            this.resumeAfterAd();
        }
    };
    DfpVideoDirective.prototype.onAdEvent = function (adEvent) {
        if (adEvent.type === google.ima.AdEvent.Type.LOADED) {
            var ad = adEvent.getAd();
            if (!ad.isLinear()) {
                this.onContentResumeRequested();
            }
        }
        this.adEvents.emit(adEvent);
    };
    DfpVideoDirective.prototype.onAdError = function (adErrorEvent) {
        if (this.adsManager) {
            this.adsManager.destroy();
        }
        this.resumeAfterAd();
        this.adEvents.emit(adErrorEvent);
    };
    // application functions
    DfpVideoDirective.prototype.resumeAfterAd = function () {
        this.contentPlayer.play();
    };
    DfpVideoDirective.prototype.pauseForAd = function () {
        this.contentPlayer.pause();
    };
    DfpVideoDirective.prototype.loadAds = function () {
        this.requestAds(this.adTag);
    };
    DfpVideoDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-video'
                },] },
    ];
    /** @nocollapse */
    DfpVideoDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] }] },
        { type: core_1.ElementRef },
        { type: core_1.Renderer2 },
        { type: service_1.DfpIDGeneratorService }
    ]; };
    DfpVideoDirective.propDecorators = {
        width: [{ type: core_1.Input }],
        height: [{ type: core_1.Input }],
        adTag: [{ type: core_1.Input }],
        adActions: [{ type: core_1.Input }],
        adEvents: [{ type: core_1.Output }]
    };
    return DfpVideoDirective;
}());
exports.DfpVideoDirective = DfpVideoDirective;
//# sourceMappingURL=dfp-video.directive.js.map