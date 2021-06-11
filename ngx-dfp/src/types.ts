type ScriptOptions = {
    id?: string;
    async?: boolean;
    type?: 'text/javascript';
    src?: string;
    innerHTML?: string,
}

type RefreshOptions = {
    slots?: googletag.Slot[];
    opt_options?: {
        changeCorrelator: boolean
    }
}

type DfpAdTargeting = {
    [key: string]: string | string[]
}

type DfpAdMapping = Array<[googletag.SingleSizeArray, googletag.GeneralSize]>;

/**
 * All GPT event types for googletag.pubads().addEventListener(?,?)
 */
enum EventTypes {
    'ImpressionViewableEvent' = 'impressionViewable',
    'SlotOnloadEvent' = 'slotOnload',
    'SlotRenderEndedEvent' = 'slotRenderEnded',
    'SlotRequestedEvent' = 'slotRequested',
    'SlotResponseReceived' = 'slotResponseReceived',
    'SlotVisibilityChangedEvent' = 'slotVisibilityChanged'
}

/**
 * @see googletag.events.Event
 */
class Event {
    serviceName!: string;
    slot!: googletag.Slot;
}

/**
 * @see googletag.events.ImpressionViewableEvent
 */
class ImpressionViewableEvent extends Event { }

/**
 * @see googletag.events.SlotOnloadEvent
 */
class SlotOnloadEvent extends Event { }

/**
 * @see googletag.events.SlotRenderEndedEvent
 */
class SlotRenderEndedEvent extends Event {
    advertiserId?: number;
    campaignId?: number;
    creativeId?: number;
    isEmpty!: boolean;
    lineItemId?: number;
    size!: Array<number> | string;
    sourceAgnosticCreativeId?: number;
    sourceAgnosticLineItemId?: number;
}

/**
 * @see googletag.events.SlotRequestedEvent
 */
class SlotRequestedEvent extends Event { }

/**
 * @see googletag.events.SlotResponseReceived
 */
class SlotResponseReceived extends Event { }

/**
 * @see googletag.events.SlotVisibilityChangedEvent
 */
class SlotVisibilityChangedEvent extends Event {
    inViewPercentage: number = 0;
}

export {
    ScriptOptions,
    RefreshOptions,
    DfpAdTargeting,
    DfpAdMapping,
    EventTypes,
    Event,
    ImpressionViewableEvent,
    SlotOnloadEvent,
    SlotRenderEndedEvent,
    SlotRequestedEvent,
    SlotResponseReceived,
    SlotVisibilityChangedEvent
}
