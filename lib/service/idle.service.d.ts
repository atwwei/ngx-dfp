import { NgZone } from '@angular/core';
export declare class IdleService {
    private requestIdleCallback;
    constructor(platformId: Object, zone: NgZone);
    request(fun: any): void;
}
