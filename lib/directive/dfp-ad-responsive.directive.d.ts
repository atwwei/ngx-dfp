import { ElementRef } from '@angular/core';
import { DfpAdDirective } from './dfp-ad.directive';
import { DfpRefreshService } from '../service';
export declare class DfpAdResponsiveDirective {
    private elementRef;
    private ad;
    private dfpRefresh;
    private iframe;
    private iframeWidth;
    private slot;
    constructor(elementRef: ElementRef, ad: DfpAdDirective, dfpRefresh: DfpRefreshService);
    normalizeIframe(): boolean;
    getIframe(): HTMLIFrameElement;
}
