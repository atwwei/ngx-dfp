export interface GoogleSlot {
  // callback for googletag.events.SlotRenderEndedEvent;
  renderEnded: Function;

  // Adds a service to this slot.
  addService(service);

  // Clears all slot-level ad category exclusion labels for this slot.
  clearCategoryExclusions();

  // Clears specific or all custom slot-level targeting parameters for this slot.
  clearTargeting(opt_key);

  // Sets an array of mappings from a minimum viewport size to slot size for this slot.
  defineSizeMapping(sizeMapping);

  // Returns the value for the AdSense attribute associated with the given key.
  get(key);

  // Returns the full path of the ad unit, with the network code and ad unit path.
  getAdUnitPath();

  // Returns the list of attribute keys set on this slot.
  getAttributeKeys();

  // Returns the ad category exclusion labels for this slot.
  getCategoryExclusions();

  // Returns the ad response information.
  getResponseInformation();

  // Returns the id of the slot element provided when the slot was defined.
  getSlotElementId();

  // Returns a specific custom targeting parameter set on this slot.
  getTargeting(key);

  // Returns the list of all custom targeting keys set on this slot.
  getTargetingKeys();

  // Sets a value for an AdSense attribute on a particular ad slot.
  set(key, value);

  // Sets a slot-level ad category exclusion label on this slot.
  setCategoryExclusion(categoryExclusion);

  // Sets the click URL to which users will be redirected after clicking on the ad.
  setClickUrl(value);

  // Sets whether the slot div should be hidden when there is no ad in the slot.
  setCollapseEmptyDiv(collapse, opt_collapseBeforeAdFetch);

  // Configures whether ads in this slot should be forced to be rendered using a SafeFrame container.
  setForceSafeFrame(forceSafeFrame);

  // Sets the slot-level preferences for SafeFrame configuration.
  setSafeFrameConfig(config);

  // Sets a custom targeting parameter for this slot.
  setTargeting(key, value);
}
