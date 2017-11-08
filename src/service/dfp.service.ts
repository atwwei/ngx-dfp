import { Injectable, Optional } from '@angular/core';

import { IdleLoad, ScriptInjectorService } from './index';

export const GPT_LIBRARY_URL = '//www.googletagservices.com/tag/js/gpt.js';

class DFPConfigurationError extends Error { }

const googletag = (window as any).googletag || {};
googletag.cmd = googletag.cmd || [];

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
    @Optional() idleLoad: IdleLoad,
    private scriptInjector: ScriptInjectorService
  ) {
    googletag.cmd.push(() => {
      this.setup();
    });
    if (this.loadGPT) {
      const loadScript = () => {
        this.scriptInjector.scriptInjector(GPT_LIBRARY_URL).then((script) => {
          this.loaded = true;
        });
        window['googletag'] = googletag;
      };
      if (idleLoad) {
        idleLoad.request(loadScript);
      } else {
        loadScript();
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
    const pubads = googletag.pubads();

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
    googletag.cmd.push(task);
  }

}
