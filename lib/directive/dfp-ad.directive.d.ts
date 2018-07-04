import { ElementRef, EventEmitter, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DfpService, DfpIDGeneratorService, DfpRefreshService } from '../service';
import { DfpConfig } from '../class';
export declare class DfpRefreshEvent {
    type: string;
    slot: any;
    data?: any;
}
export declare class DfpAdDirective implements OnInit, AfterViewInit, OnDestroy {
    private platformId;
    private elementRef;
    private dfp;
    private dfpIDGenerator;
    private dfpRefresh;
    private config;
    adUnit: string;
    clickUrl: string;
    forceSafeFrame: boolean;
    safeFrameConfig: string;
    refresh: string;
    collapseIfEmpty: boolean;
    afterRefresh: EventEmitter<DfpRefreshEvent>;
    private sizes;
    private responsiveMapping;
    private targetings;
    private exclusions;
    private scripts;
    private slot;
    private onSameNavigation;
    constructor(platformId: Object, elementRef: ElementRef, dfp: DfpService, dfpIDGenerator: DfpIDGeneratorService, dfpRefresh: DfpRefreshService, config: DfpConfig, router: Router);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private setResponsiveMapping(slot);
    private defineSlot();
    private refreshContent();
    checkValid(): void;
    readonly isHidden: any;
    getState(): Readonly<{
        sizes: any[];
        responsiveMapping: any[];
        targetings: any[];
        exclusions: any[];
        adUnit: string;
        forceSafeFrame: boolean;
        safeFrameConfig: string;
        clickUrl: string;
        refresh: string;
        scripts: any[];
        collapseIfEmpty: boolean;
    }>;
    addSize(size: any): void;
    addResponsiveMapping(mapping: any): void;
    addTargeting(targeting: any): void;
    addExclusion(exclusion: any): void;
    addScript(script: any): void;
}
