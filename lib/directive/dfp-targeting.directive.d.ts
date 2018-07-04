import { AfterContentInit } from '@angular/core';
import { DfpAdDirective } from './dfp-ad.directive';
export declare class DfpTargetingDirective implements AfterContentInit {
    private ad;
    key: string;
    value: string | Array<string>;
    private values;
    constructor(ad: DfpAdDirective);
    ngAfterContentInit(): void;
    checkValid(): void;
    getState(): Readonly<{
        key: string;
        values: any[];
    }>;
    addValue(value: any): void;
}
