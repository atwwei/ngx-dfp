import { ElementRef, OnInit } from '@angular/core';
import { DfpAdDirective } from './dfp-ad.directive';
export declare class DfpExclusionDirective implements OnInit {
    private elementRef;
    private ad;
    constructor(elementRef: ElementRef, ad: DfpAdDirective);
    ngOnInit(): void;
}
