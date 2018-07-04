export declare class DFPIncompleteError extends Error {
    constructor(directiveName: any, missingName: any, isAttribute?: any);
}
export declare class DFPTypeError extends Error {
    constructor(directiveName: any, attributeName: any, wrongValue: any, expectedType: any);
}
export declare class DFPMissingParentError extends Error {
    constructor(directiveName: any, ...parents: any[]);
}
