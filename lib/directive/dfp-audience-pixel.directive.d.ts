import { ElementRef, OnInit } from '@angular/core';
export declare class DfpAudiencePixelDirective implements OnInit {
    private platformId;
    private elementRef;
    adUnit: string;
    segmentId: number;
    ppid: number;
    constructor(platformId: Object, elementRef: ElementRef);
    ngOnInit(): void;
}
