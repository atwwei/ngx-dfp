export class DfpTargeting {
    [key: string]: Array<string>;
}

export class DfpConfig {
    singleRequestMode?: boolean;
    collapseIfEmpty?: boolean;
    centering?: boolean;
    location?: string | Array<string>;
    ppid?: string;
    globalTargeting?: DfpTargeting;
    forceSafeFrame?: boolean;
    safeFrameConfig?: object;
    loadGPT?: boolean;
}
