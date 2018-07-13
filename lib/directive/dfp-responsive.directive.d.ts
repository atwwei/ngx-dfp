import { OnInit } from '@angular/core';
import { DfpAdDirective } from './dfp-ad.directive';
export declare class DfpResponsiveDirective implements OnInit {
    private ad;
    viewport: number[];
    adSizes: any[];
    constructor(ad: DfpAdDirective);
    ngOnInit(): void;
    viewWidth: number;
    viewHeight: number;
    addSize(size: any): void;
    getState(): Readonly<{
        viewportSize: number[];
        adSizes: any[];
    }>;
}
