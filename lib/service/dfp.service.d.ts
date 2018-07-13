import { DfpConfig } from '../class';
import { IdleService } from './idle.service';
import { ScriptInjectorService } from './script-injector.service';
export declare const GPT_LIBRARY_URL = "//www.googletagservices.com/tag/js/gpt.js";
export declare class DfpService {
    private platformId;
    private config;
    private scriptInjector;
    private enableVideoAds;
    private personalizedAds;
    private collapseIfEmpty;
    private centering;
    private location;
    private ppid;
    private globalTargeting;
    private forceSafeFrame;
    private safeFrameConfig;
    private loadGPT;
    private loaded;
    constructor(platformId: Object, idleLoad: IdleService, config: DfpConfig, scriptInjector: ScriptInjectorService);
    private dfpConfig();
    private addSafeFrameConfig(pubads);
    private addTargeting(pubads);
    private addLocation(pubads);
    private addPPID(pubads);
    private setup();
    hasLoaded(): boolean;
    defineTask(task: any): void;
}
