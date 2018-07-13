import { ElementRef, OnInit } from '@angular/core';
import { DfpAdDirective } from './dfp-ad.directive';
import { DfpResponsiveDirective } from './dfp-responsive.directive';
export declare class DfpSizeDirective implements OnInit {
    private elementRef;
    private ad;
    private resp;
    width: number;
    height: number;
    constructor(elementRef: ElementRef, ad: DfpAdDirective, resp: DfpResponsiveDirective);
    ngOnInit(): void;
}
