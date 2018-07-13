export interface GoogleSlot {
    renderEnded: Function;
    addService(service: any): any;
    clearCategoryExclusions(): any;
    clearTargeting(opt_key: any): any;
    defineSizeMapping(sizeMapping: any): any;
    get(key: any): any;
    getAdUnitPath(): any;
    getAttributeKeys(): any;
    getCategoryExclusions(): any;
    getResponseInformation(): any;
    getSlotElementId(): any;
    getTargeting(key: any): any;
    getTargetingKeys(): any;
    set(key: any, value: any): any;
    setCategoryExclusion(categoryExclusion: any): any;
    setClickUrl(value: any): any;
    setCollapseEmptyDiv(collapse: any, opt_collapseBeforeAdFetch: any): any;
    setForceSafeFrame(forceSafeFrame: any): any;
    setSafeFrameConfig(config: any): any;
    setTargeting(key: any, value: any): any;
}
