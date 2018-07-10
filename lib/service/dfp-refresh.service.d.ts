import { EventEmitter, Injector } from '@angular/core';
import { DfpConfig } from '../class';
import { ParseDurationService } from './parse-duration.service';
export declare class DfpRefreshService {
    private config;
    private inject;
    private parseDuration;
    refreshEvent: EventEmitter<any>;
    private refreshSlots;
    private singleRequest;
    private intervals;
    constructor(config: DfpConfig, inject: Injector, parseDuration: ParseDurationService);
    slotRefresh(slot: any, refreshInterval?: any, initRefresh?: boolean): Promise<any>;
    cancelInterval(slot: any): this;
    private hasSlotInterval(slot);
    private refresh(tasks?);
    private addSlotInterval(task, interval);
    private slotIntervalKey(slot);
    private validateInterval(milliseconds, beforeParsing);
    hiddenCheck(element: Element): any;
}
