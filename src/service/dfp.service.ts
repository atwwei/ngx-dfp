import { Injectable, Optional, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { DfpConfig } from '../class';
import { IdleService } from './idle.service';
import { ScriptInjectorService } from './script-injector.service';

export const GPT_LIBRARY_URL = '//www.googletagservices.com/tag/js/gpt.js';

class DFPConfigurationError extends Error { }

@Injectable()
export class DfpService {

  private enableVideoAds = true;

  private collapseIfEmpty = true;

  private centering = false;

  private location = null;

  private ppid = null;

  private globalTargeting = null;

  private forceSafeFrame = false;

  private safeFrameConfig = null;

  private loadGPT = true;

  private loaded = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() idleLoad: IdleService,
    @Optional() config: DfpConfig,
    private scriptInjector: ScriptInjectorService
  ) {
    this.dfpConfig(config);
    if (isPlatformBrowser(this.platformId)) {
      const win: any = window,
        googletag = win.googletag || {};

      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(() => {
        this.setup();
      });
      win.googletag = googletag;

      if (this.loadGPT) {
        const loadScript = () => {
          this.scriptInjector.scriptInjector(GPT_LIBRARY_URL).then((script) => {
            this.loaded = true;
          });
        };
        if (idleLoad) {
          idleLoad.request(loadScript);
        } else {
          loadScript();
        }
      }
    }
  }

  private dfpConfig(config: DfpConfig) {
    console.log(config);
    if (config) {
      for (const key in config) {
        if (this.hasOwnProperty(key)) {
          this[key] = config[key];
        }
      }
    }
  }

  private addSafeFrameConfig(pubads) {
    if (!this.safeFrameConfig) { return false; }
    if (typeof this.safeFrameConfig !== 'object') {
      throw new DFPConfigurationError('FrameConfig must be an object');
    }
    pubads.setSafeFrameConfig(this.safeFrameConfig);
  }

  private addTargeting(pubads) {
    if (!this.globalTargeting) { return false; }
    if (typeof this.globalTargeting !== 'object') {
      throw new DFPConfigurationError('Targeting must be an object');
    }

    for (const key in this.globalTargeting) {
      if (this.globalTargeting.hasOwnProperty(key)) {
        pubads.setTargeting(key, this.globalTargeting[key]);
      }
    }
  }

  private addLocation(pubads) {
    if (!this.location) { return false; }

    if (typeof this.location === 'string') {
      pubads.setLocation(this.location);
      return;
    }

    if (!Array.isArray(this.location)) {
      throw new DFPConfigurationError('Location must be an ' +
        'array or string');
    }

    pubads.setLocation.apply(pubads, this.location);
  }

  private addPPID(pubads) {
    if (!this.ppid) { return false; }
    if (typeof this.ppid !== 'string') {
      throw new DFPConfigurationError('PPID must be a string');
    }

    pubads.setPublisherProvidedId(this.ppid);
  }

  private setup() {
    const win: any = window,
      googletag = win.googletag,
      pubads = googletag.pubads();

    if (this.enableVideoAds) {
      pubads.enableVideoAds();
    }

    if (this.collapseIfEmpty) {
      pubads.collapseEmptyDivs();
    }

    // We always refresh ourselves
    pubads.disableInitialLoad();

    pubads.setForceSafeFrame(this.forceSafeFrame);
    pubads.setCentering(this.centering);

    this.addLocation(pubads);
    this.addPPID(pubads);
    this.addTargeting(pubads);
    this.addSafeFrameConfig(pubads);

    // pubads.enableSyncRendering();
    pubads.enableAsyncRendering();

    googletag.enableServices();

  }

  hasLoaded() {
    return this.loaded;
  }

  defineTask(task) {
    if (isPlatformBrowser(this.platformId)) {
      const win: any = window,
        googletag = win.googletag;
      googletag.cmd.push(task);
    }
  }

}
