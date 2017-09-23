import { Injectable } from '@angular/core';

class DFPDurationError extends Error {
  constructor(interval) {
    super(`Invalid interval: '${interval}'ls`);
  }
}

@Injectable()
export class ParseDurationService {

  convertToMilliseconds(time, unit) {
    console.assert(/^(m?s|min|h)$/g.test(unit));

    if (unit === 'ms') { return time; }
    if (unit === 's') { return time * 1000; }
    if (unit === 'min') { return time * 60 * 1000; }

    return time * 60 * 60 * 1000;
  }

  convert(match) {
    const time = parseFloat(match[1]);

    if (match.length === 2) { return time; }

    return this.convertToMilliseconds(time, match[2]);
  }

  parseDuration(interval) {

    if (interval === undefined || interval === null) {
      throw new DFPDurationError(interval);
    }

    if (typeof interval === 'number') {
      return interval;
    }

    if (typeof interval !== 'string') {
      throw new TypeError(`'${interval}' must be of number or string type`);
    }

    const match = interval.match(/((?:\d+)?.?\d+)(m?s|min|h)?/);

    if (!match) {
      throw new DFPDurationError(interval);
    }

    return this.convert(match);
  }

}
