

export class DFPIncompleteError extends Error {
    constructor(directiveName, missingName, isAttribute?) {
        super(`Incomplete definition of '${directiveName}': ` +
            `Missing ${isAttribute ? 'attribute' : 'child directive'} ` +
            `'${missingName}'.`);
    }
}

export class DFPTypeError extends Error {
    constructor(directiveName, attributeName, wrongValue, expectedType) {
        super(
            `Wrong type for attribute '${attributeName}' on ` +
            `directive '${directiveName}': Expected ${expectedType}` +
            `, got ${typeof wrongValue}`
        );
    }
}

export class DFPMissingParentError extends Error {
    constructor(directiveName, ...parents) {
        console.assert(parents && parents.length > 0);
        if (Array.isArray(parents[0])) {
            parents = parents[0];
        }

        let parentMessage;
        if (parents.length > 1) {
            parents = parents.map(p => `'${p}'`);
            parentMessage = ', which must be ';
            parentMessage += parents.slice(0, -1).join(', ');
            parentMessage += ` or ${parents[parents.length - 1]}`;
        } else {
            parentMessage = ` '${parents[0]}'`;
        }

        super(
            `Invalid use of '${directiveName}' directive. ` +
            `Missing parent directive${parentMessage}.`
        );
    }
}
