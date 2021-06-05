/**
 * @link https://developers.google.com/publisher-tag/reference#googletag
 */
declare namespace googletag {
    type GeneralSize = SingleSize | MultiSize;
    type MultiSize = SingleSize[];
    type NamedSize = 'fluid';
    type SingleSize = SingleSizeArray | NamedSize;
    type SingleSizeArray = [number, number];
    type SizeMapping = GeneralSize[];
    type SizeMappingArray = SizeMapping[];

    /**
     * Flag indicating that GPT API is loaded and ready to be called.
     */
    let apiReady: boolean;

    /**
     * Reference to the global command queue for asynchronous execution of GPT-related calls.
     */
    let cmd: CommandArray;

    /**
     * This is the namespace that GPT uses for enum types.
     */
    namespace enums {
        /**
         * Out of page formats supported by GPT.
         */
        enum OutOfPageFormat {
            BOTTOM_ANCHOR = 3,
            INTERSTITIAL = 5,
            REWARDED = 4,
            TOP_ANCHOR = 2
        }
    }

    /**
     * This is the namespace that GPT uses for Events.
     */
    namespace events {

        /**
         * Base Interface for all GPT events. All GPT events below will have the following fields.
         * @link https://developers.google.com/publisher-tag/reference#events.event
         */
        type Event = {
            /**
             * Name of the service that triggered the event.
             */
            serviceName: string;

            /**
             * The slot that triggered the event.
             */
            slot: Slot;
        }

        /**
         * This event is fired when an impression becomes viewable, according to the Active View criteria.
         */
        type ImpressionViewableEvent = Event;

        /**
         * This event is fired when the creative's iframe fires its load event. When rendering rich media ads in sync rendering mode, no iframe is used so no SlotOnloadEvent will be fired.
         */
        type SlotOnloadEvent = Event;

        /**
         * This event is fired when the creative code is injected into a slot. This event will occur before the creative's resources are fetched, so the creative may not be visible yet. If you need to know when all creative resources for a slot have finished loading, consider the SlotOnloadEvent instead.
         */
        interface SlotRenderEndedEvent extends Event {
            /**
             * Advertiser ID of the rendered ad. Value is null for empty slots, backfill ads or creatives rendered by services other than pubads service. 
             */
            advertiserId?: number;

            /**
             * Campaign ID of the rendered ad. Value is null for empty slots, backfill ads or creatives rendered by services other than pubads service. 
             */
            campaignId?: number;

            /**
             * Creative ID of the rendered reservation ad. Value is null for empty slots, backfill ads or creatives rendered by services other than pubads service. 
             */
            creativeId?: number;

            /**
             * true if no ad was returned for the slot, false otherwise.
             */
            isEmpty: boolean;

            /**
             * Line item ID of the rendered reservation ad. Value is null for empty slots, backfill ads or creatives rendered by services other than pubads service. 
             */
            lineItemId?: number;
            /**
             * Indicates the pixel size of the rendered creative. Example: [728, 90]. Value is null for empty ad slots.
             */
            size: Array<number> | string
            /**
             * Creative ID of the rendered reservation or backfill ad. Value is null if the ad is not a reservation or line item backfill or a creative rendered by services other than pubads service. 
             */
            sourceAgnosticCreativeId?: number;

            /** 
             * Line item ID of the rendered reservation or backfill ad. Value is null if the ad is not a reservation or line item backfill or a creative rendered by services other than pubads service.
             */
            sourceAgnosticLineItemId?: number;
        }

        /**
         * This event is fired when an ad has been requested for a particular slot.
         */
        type SlotRequestedEvent = Event;

        /**
         * This event is fired when an ad response has been received for a particular slot.
         */
        type SlotResponseReceived = Event;

        /**
         * This event is fired whenever the on-screen percentage of an ad slot's area changes. The event is throttled and will not fire more often than once every 200ms.
         */
        interface SlotVisibilityChangedEvent extends Event {
            /**
             * The percentage (0-100) of the ad's area that is visible.
             */
            inViewPercentage: number;
        }
    }

    /**
     * Flag indicating that Pubads service is enabled, loaded and fully operational.
     */
    let pubadsReady: boolean;

    /**
     * Returns a reference to the companion ads service.
     */
    function companionAds(): CompanionAdsService;

    /**
     * Returns a reference to the content service.
     */
    function content(): ContentService;

    /**
     * Constructs an out-of-page (interstitial) ad slot with the given ad unit path.  
     * For custom out-of-page ads, opt_div is the ID of the div element that will contain the ad. See the article on out-of-page creatives for more details.  
     * For GPT managed out-of-page ads, opt_div is a supported OutOfPageFormat. See the article on web interstitials for more details.
     * @param adUnitPath Full ad unit path with the network code and unit code.
     * @param opt_div ID of the div that will contain this ad unit or OutOfPageFormat.
     */
    function defineOutOfPageSlot(adUnitPath: string, opt_div: string): Slot;

    /**
     * Constructs an ad slot with a given ad unit path and size and associates it with the ID of a div element on the page that will contain the ad.
     * @param adUnitPath Full ad unit path with the network code and unit code.
     * @param size Width and height of the added slot. This is the size that is used in the ad request if no responsive size mapping is provided or the size of the viewport is smaller than the smallest size provided in the mapping.
     * @param opt_div ID of the div that will contain this ad unit.
     */
    function defineSlot(adUnitPath: string, size: GeneralSize, opt_div: string): Slot;

    /**
     * Destroys the given slots, removing all related objects and references of those slots from GPT. This API does not support passback slots and companion slots. Calling this API on a slot clears the ad and removes the slot object from the internal state maintained by GPT. Calling any more functions on the slot object will result in undefined behaviour. Note the browser may still not free the memory associated with that slot if a reference to it is maintained by the publisher page. Calling this API makes the div associated with that slot available for reuse. In particular, destroying a slot removes the ad from GPT's long-lived pageview, so future requests will not be influenced by roadblocks or competitive exclusions involving this ad. Failure to call this function before removing a slot's div from the page will result in undefined behavior.
     * @param opt_slots The array of slots to destroy. Array is optional; all slots will be destroyed if it is unspecified.
     * @returns true if slots have been destroyed, false otherwise.
     */
    function destroySlots(opt_slots?: Slot[]): boolean;

    /**
     * Disables the Google Publisher Console.
     */
    function disablePublisherConsole(): void;

    /**
     * Instructs slot services to render the slot. Each ad slot should only be displayed once per page. All slots must be defined and have a service associated with them before being displayed. The display call must not happen until the element is present in the DOM. The usual way to achieve that is to place it within a script block within the div element named in the method call.
     * If single request architecture (SRA) is being used, all unfetched ad slots at the moment display is called will be fetched in a single instance of googletag.display(). To force an ad slot not to display, the entire div must be removed.
     * @param divOrSlot Either the ID of the div element containing the ad slot or the div element, or the slot object. If a div element is provided, it must have an 'id' attribute which matches the ID passed into googletag.defineSlot().
     */
    function display(divOrSlot: string | Element): void;

    /**
     * Enables all GPT services that have been defined for ad slots on the page.
     */
    function enableServices(): void;

    /**
     * Returns the current version of GPT.
     */
    function getVersion(): string;

    /**
     * Opens the Google Publisher Console.
     * @param opt_div ID of the div element containing the ad slot.
     */
    function openConsole(opt_div: string): void;

    /**
     * Returns a reference to the pubads service.
     */
    function pubads(): PubAdsService;

    /**
     * Sets that title for all ad container iframes created by pubads service, from this point onwards.
     * @param title 
     */
    function setAdIframeTitle(title: string): void;

    /** 
     * Creates a new SizeMappingBuilder.
     */
    function sizeMapping(): SizeMappingBuilder;

    /**
     * The command array accepts a sequence of functions and invokes them in order. It is intended to replace a standard array that is used to enqueue functions to be invoked once GPT is loaded.
     */
    interface CommandArray {
        /**
         * Executes the sequence of functions specified in the arguments in order.
         * @param f A JavaScript function to be executed.
         * @returns The number of commands processed so far. This is compatible with Array.push's return value (the current length of the array).
         */
        push(f: Function): number;
    }

    /**
     * Companion Ads service. This service is used by video ads to show companion ads. See the article on companion ads for video for more details.
     */
    interface CompanionAdsService extends Service {
        /**
         * Sets whether companion slots that have not been filled will be automatically backfilled.  
         * This method can be called multiple times during the page's lifetime to turn backfill on and off. Only slots that are also registered with the pubads service will be backfilled. Due to policy restrictions, this method is not designed to fill empty companion slots when an Ad Exchange video is served.
         * @param value true to automatically backfill unfilled slots, false to leave them unchanged.
         */
        setRefreshUnfilledSlots(value: boolean): void;
    }

    /**
     * The content service. This service is used to set the content of a slot manually.
     */
    interface ContentService extends Service {
        /**
         * Fills a slot with the given content. If services are not yet enabled, stores the content and fills it in when services are enabled.
         * @param slot The slot to be filled.
         * @param content The HTML content for the slot.
         */
        setContent(slot: Slot, content: string): void;
    }

    /**
     * Configuration object allows customization of lazy loading behavior. Any omitted configurations will use a default set by Google that will be tuned over time. To disable a particular setting, such as a fetching margin, set the value to -1.
     */
    type LazyLoadConfig = {
        /**
         * fetchMarginPercent is the minimum distance from the current viewport a slot must be before we fetch the ad as a percentage of viewport size. 0 means "when the slot enters the viewport", 100 means "when the ad is 1 viewport away", and so on.
         */
        fetchMarginPercent?: number;
        /**
         * renderMarginPercent is the minimum distance from the current viewport a slot must be before we render an ad. This allows for prefetching the ad, but waiting to render and download other subresources. The value works just like fetchMarginPercent as a percentage of viewport.
         */
        renderMarginPercent?: number;
        /**
         * mobileScaling is a multiplier applied to margins on mobile devices. This allows varying margins on mobile vs. desktop. For example, a mobileScaling of 2.0 will multiply all margins by 2 on mobile devices, increasing the minimum distance a slot can be before fetching and rendering.
         */
        mobileScaling?: number;
    }

    /**
     * Configuration object for privacy settings.
     */
    type PrivacySettingsConfig = {
        /**
         * childDirectedTreatment configuration indicates whether the page should be treated as child-directed. Set to null to clear the configuration.
         */
        childDirectedTreatment?: boolean;

        /**
         * limitedAds configuration enables serving to run in limited ads mode to aid in publisher regulatory compliance needs. When enabled, the GPT library itself may optionally be requested from a cookie-less, limited ads URL.
         */
        limitedAds?: boolean;

        /**
         * restrictDataProcessing configuration enables serving to run in restricted processing mode to aid in publisher regulatory compliance needs.
         */
        restrictDataProcessing?: boolean;

        /**
         * underAgeOfConsent configuration indicates whether to mark ad requests as coming from users under the age of consent. Set to null to clear the configuration.
         */
        underAgeOfConsent?: boolean;
    }

    /**
     * Publisher Ads service. This service is used to fetch and show ads from your Google Ad Manager account.
     * @link https://developers.google.com/publisher-tag/reference#pubadsservice
     */
    interface PubAdsService extends Service {
        /**
         * Removes the ads from the given slots and replaces them with blank content.
         * @param opt_slots 
         */
        clear(opt_slots?: Slot[]): boolean;

        /**
         * Clears all page-level ad category exclusion labels.
         */
        clearCategoryExclusions(): PubAdsService;

        /**
         * Clears custom targeting parameters for a specific key or for all keys.
         * @param opt_key 
         */
        clearTargeting(opt_key: string): PubAdsService;

        /**
         * Enables collapsing of slot divs so that they don't take up any space on the page when there is no ad content to display.
         * @param opt_collapseBeforeAdFetch 
         */
        collapseEmptyDivs(opt_collapseBeforeAdFetch?: boolean): boolean;

        /**
         * Disables requests for ads on page load, but allows ads to be requested with a googletag.pubads().refresh() call.
         */
        disableInitialLoad(): void;

        /**
         * Constructs and displays an ad slot with the given ad unit path and size.
         * @param adUnitPath The ad unit path of slot to be rendered.
         * @param size Width and height of the slot.
         * @param opt_div Either the ID of the div containing the slot or the div element itself.
         * @param opt_clickUrl The click URL to use on this slot.
         */
        display(adUnitPath: string, size: GeneralSize, opt_div: string | Element, opt_clickUrl: string): void;

        /**
         * Enables lazy loading in GPT as defined by the config object. For more detailed examples, see the Lazy Loading example here.
         * Notes: Lazy fetching in SRA only works if all slots are outside the fetching margin.
         * @param opt_config 
         */
        enableLazyLoad(opt_config?: LazyLoadConfig): void;

        /**
         * Enables single request mode for fetching multiple ads at the same time.
         */
        enableSingleRequest(): boolean;

        /**
         * Signals to GPT that video ads will be present on the page.
         */
        enableVideoAds(): void;

        /**
         * Returns the value for the AdSense attribute associated with the given key.
         * @param key 
         */
        get(key: string): string | null;

        /**
         * Returns the attribute keys that have been set on this service.
         */
        getAttributeKeys(): string[];

        /**
         * Returns a specific custom service-level targeting parameter that has been set.
         * @param key 
         */
        getTargeting(key: string): string[];

        /**
         * Returns the list of all custom service-level targeting keys that have been set.
         */
        getTargetingKeys(): string[];

        /**
         * Returns whether or not initial requests for ads was successfully disabled by a previous disableInitialLoad call.
         */
        isInitialLoadDisabled(): boolean;

        /**
         * Fetches and displays new ads for specific or all slots on the page.
         * @param opt_slots 
         * @param opt_options 
         */
        refresh(opt_slots?: Slot[], opt_options?: { changeCorrelator: boolean }): void;

        /**
         * Sets values for AdSense attributes that apply to all ad slots under the publisher ads service.
         * @param key 
         * @param value 
         */
        set(key: string, value: string): PubAdsService;

        /**
         * Sets a page-level ad category exclusion for the given label name.
         * @param categoryExclusion The ad category exclusion label to add.
         */
        setCategoryExclusion(categoryExclusion: string): PubAdsService;

        /**
         * Enables and disables horizontal centering of ads.
         * @param centerAds true to center ads, false to left-align them.
         */
        setCentering(centerAds: boolean): void;

        /**
         * Sets options for ignoring Google Ad Manager cookies on the current page.
         * @param options 
         * 0: Enables Google Ad Manager cookies on ad requests on the page. This option is set by default.  
         * 1: Ignores Google Ad Manager cookies on subsequent ad requests and prevents cookies from being created on the page. Note that cookies will not be ignored on certain pingbacks and that this option will disable features that rely on cookies, such as dynamic allocation.
         */
        setCookieOptions(options: 0 | 1): PubAdsService;

        /**
         * Configures whether all ads on the page should be forced to be rendered using a SafeFrame container.
         * @param forceSafeFrame true to force all ads on the page to be rendered in SafeFrames and false to change the previous setting to false. Setting this to false when unspecified earlier, won't change anything.
         */
        setForceSafeFrame(forceSafeFrame: boolean): PubAdsService;

        /**
         * Passes location information from websites so you can geo-target line items to specific locations.
         * @param address Freeform address.
         */
        setLocation(address: string): PubAdsService;

        /**
         * Allows configuration of all privacy settings from a single API using a config object.
         * @param privacySettings Object containing privacy settings config.
         */
        setPrivacySettings(privacySettings: PrivacySettingsConfig): PubAdsService;

        /**
         * Sets the value for the publisher-provided ID.
         * @param ppid 
         */
        setPublisherProvidedId(ppid: string): PubAdsService;

        /**
         * Configures whether the page should request personalized or non-personalized ads.
         * @param nonPersonalizedAds 0 for personalized ads, 1 for non-personalized ads.
         */
        setRequestNonPersonalizedAds(nonPersonalizedAds?: number): PubAdsService;

        /**
         * Sets the page-level preferences for SafeFrame configuration.
         * @param config 
         */
        setSafeFrameConfig(config: SafeFrameConfig): PubAdsService;

        /**
         * Sets custom targeting parameters for a given key that apply to all pubads service ad slots.
         * @param key 
         * @param value 
         */
        setTargeting(key: string, value: string | string[]): PubAdsService;

        /**
         * Sets the video content information to be sent along with the ad requests for targeting and content exclusion purposes.
         * @param videoContentId 
         * @param videoCmsId 
         */
        setVideoContent(videoContentId: string, videoCmsId: string): void;

        /**
         * Changes the correlator that is sent with ad requests, effectively starting a new page view.
         */
        updateCorrelator(): PubAdsService;
    }

    /**
     * Public interface for ResponseInformation.
     */
    export type ResponseInformation = {
        /**
         * The ID of the advertiser.
         */
        advertiserId: number;
        /**
         * The ID of the campaign.
         */
        campaignId: number;
        /**
         * The ID of the creative.
         */
        creativeId?: number;
        /**
         * The template id of the ad.
         */
        creativeTemplateId?: number;
        /**
         * The ID of the line item.
         */
        lineItemId?: number;
    }

    /**
     * Configuration object for SafeFrame containers.
     */
    type SafeFrameConfig = {
        /**
         * true to allow expansion by overlay and false otherwise.
         */
        allowOverlayExpansion?: boolean;

        /**
         * true to allow expansion by push and false otherwise.
         */
        allowPushExpansion?: boolean;

        /**
         * true if SafeFrame should use the HTML5 sandbox attribute to prevent top level navigation.
         */
        sandbox?: boolean;

        /**
         * Whether to use a unique subdomain for SafeFrame for Reservation creatives.
         */
        useUniqueDomain?: boolean;
    }

    /**
     * Base service class that contains methods common for all services.
     * @link https://developers.google.com/publisher-tag/reference#service
     */
    interface Service {
        /**
         * Registers a listener that allows you to set up and call a JavaScript function when a specific GPT event happens on the page.
         * @param eventType A string representing the type of event generated by GPT. Event types are case sensitive.  
         * All values: impressionViewable slotOnload slotRenderEnded slotRequested slotResponseReceived slotVisibilityChanged
         * @param listener Function that takes a single event object argument.
         */
        addEventListener(eventType: string, listener: Function): void;

        /**
         * Get the list of slots associated with this service.
         */
        getSlots(): Slot[];
    }

    /**
     * Builder for size mapping specification objects. This builder is provided to help easily construct size specifications.  
     * See the article on responsive design for more details.
     */
    export interface SizeMappingBuilder {
        /**
         * Adds a mapping from a single-size array representing the viewport to either a single-size array or a multi-size array representing the slot.
         * @param viewportSize 
         * @param slotSize 
         */
        addSize(viewportSize: SingleSize, slotSize: GeneralSize): SizeMappingBuilder;
        /**
         * Builds a size map specification from the mappings added to this builder.
         */
        build(): SizeMappingArray;
    }

    /**
    * Slot is an object representing single ad slot on a page.
    * @link https://developers.google.com/publisher-tag/reference#slot
    */
    interface Slot {
        /**
        * Adds a service to this slot.
        */
        addService(service: Service): Slot;

        /**
        * Clears all slot-level ad category exclusion labels for this slot.
        */
        clearCategoryExclusions(): Slot;

        /**
        * Clears specific or all custom slot-level targeting parameters for this slot.
        */
        clearTargeting(opt_key: string): Slot;

        /**
        * Sets an array of mappings from a minimum viewport size to slot size for this slot.
        */
        defineSizeMapping(sizeMapping: SizeMappingArray): Slot;

        /**
        * Returns the value for the AdSense attribute associated with the given key.
        */
        get(key: string): string | null;

        /**
        * Returns the full path of the ad unit, with the network code and ad unit path.
        */
        getAdUnitPath(): string;

        /**
        * Returns the list of attribute keys set on this slot.
        */
        getAttributeKeys(): string[];

        /**
        * Returns the ad category exclusion labels for this slot.
        */
        getCategoryExclusions(): string[];

        /**
        * Returns the ad response information.
        */
        getResponseInformation(): ResponseInformation;

        /**
        * Returns the id of the slot element provided when the slot was defined.
        */
        getSlotElementId(): string;

        /**
        * Returns a specific custom targeting parameter set on this slot.
        */
        getTargeting(key: string): string[];

        /**
        * Returns the list of all custom targeting keys set on this slot.
        */
        getTargetingKeys(): string[];

        /**
        * Sets a value for an AdSense attribute on a particular ad slot.
        */
        set(key: string, value: string): Slot;

        /**
        * Sets a slot-level ad category exclusion label on this slot.
        */
        setCategoryExclusion(categoryExclusion: string): Slot;

        /**
        * Sets the click URL to which users will be redirected after clicking on the ad.
        */
        setClickUrl(value: string): Slot;

        /**
        * Sets whether the slot div should be hidden when there is no ad in the slot.
        */
        setCollapseEmptyDiv(collapse: boolean, opt_collapseBeforeAdFetch: boolean): Slot;

        /**
        * Configures whether ads in this slot should be forced to be rendered using a SafeFrame container.
        */
        setForceSafeFrame(forceSafeFrame: boolean): Slot;

        /**
        * Sets the slot-level preferences for SafeFrame configuration.
        */
        setSafeFrameConfig(config: SafeFrameConfig): Slot;

        /**
        * Sets a custom targeting parameter for this slot.
        */
        setTargeting(key: string, value: string | string[]): Slot;

        /**
        * Sets custom targeting parameters for this slot, from a key:value map in a JSON object.
        */
        updateTargetingFromMap(map: any): Slot;
    }

}