import { ElementRef, OnInit } from '@angular/core';
import { DfpTargetingDirective } from './dfp-targeting.directive';
export declare class DfpValueDirective implements OnInit {
    private elementRef;
    private targeting;
    constructor(elementRef: ElementRef, targeting: DfpTargetingDirective);
    ngOnInit(): void;
}
