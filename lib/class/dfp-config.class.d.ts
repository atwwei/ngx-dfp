import { InjectionToken } from '@angular/core';
export declare class DfpTargeting {
    [key: string]: Array<string>;
}
export declare class DfpConfig {
    idleLoad?: boolean;
    onSameNavigation?: 'refresh' | 'ignore';
    singleRequestMode?: boolean;
    enableVideoAds?: boolean;
    personalizedAds?: boolean;
    collapseIfEmpty?: boolean;
    centering?: boolean;
    location?: string | Array<string>;
    ppid?: string;
    globalTargeting?: DfpTargeting;
    forceSafeFrame?: boolean;
    safeFrameConfig?: object;
    loadGPT?: boolean;
}
export declare const DFP_CONFIG: InjectionToken<DfpConfig>;
