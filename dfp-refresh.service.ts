import { Injectable } from '@angular/core';

import { Observable, Subscription } from "rxjs/Rx";

import { ParseDurationService } from './service';

class DFPRefreshError extends Error { }

const Options = Object.freeze({
  REFRESH: 'refresh',
  INTERVAL: 'interval',
  BARRIER: 'barrier'
});

declare var googletag;

@Injectable()
export class DfpRefreshService {

  private bufferInterval: number;

  private bufferBarrier: number;

  private oneShotBarrier: number;

  private refreshInterval: number;

  private priority = {
    'refresh': 1,
    'interval': 1,
    'barrier': 1
  }
  private isEnabled: any;
  Options: any;

  private buffer = [];
  private intervals = { refresh: null, buffer: null }

  constructor(
    private parseDuration: ParseDurationService
  ) {
    this.Options = Object.freeze({
      'REFRESH': Options.REFRESH,
      'INTERVAL': Options.INTERVAL,
      'BARRIER': Options.BARRIER
    });
    this.isEnabled = Object.seal({
      refresh: this.refreshInterval !== null,
      interval: this.bufferInterval !== null,
      barrier: this.bufferBarrier !== null
    });
  }

  slotRefresh(slot, interval, defer?) {

    let deferred = Observable.from([slot]).toPromise();

    let task = { slot: slot, deferred: deferred };

    deferred.then(() => {
      if (this.refreshInterval) {
        this.refreshInterval = this.parseDuration.parseDuration(this.refreshInterval);
      }

      if (this.bufferInterval) {
        this.bufferInterval = this.parseDuration.parseDuration(this.bufferInterval);
      }

      if (interval) {
        this.addSlotInterval(task, interval);
      }

      if (!interval || !defer) {
        this.scheduleRefresh(task);
      }

      this.prioritize();
    })
    return deferred;
  }


  cancelInterval(slot) {
    if (!this.hasSlotInterval(slot)) {
      throw new DFPRefreshError("No interval for given slot");
    }

    let interval: Subscription = this.intervals[this.slotIntervalKey(slot)];
    interval.unsubscribe();
    delete this.intervals[slot];

    return this;
  }

  hasSlotInterval(slot) {
    return this.slotIntervalKey(slot) in this.intervals;
  }

  setBufferInterval(interval) {
    this.bufferInterval = this.parseDuration.parseDuration(interval);
    this.prioritize();

    return this;
  }

  clearBufferInterval() {
    if (!this.hasBufferInterval()) {
      console.warn("clearBufferInterval had no " +
        "effect because no interval was set.");
      return this;
    }

    this.disableBufferInterval();
    this.bufferInterval = null;

    this.prioritize();

    return this;
  }

  hasBufferInterval() {
    return this.bufferInterval !== null;
  }

  bufferIntervalIsEnabled() {
    return this.isEnabled.interval;
  }

  getBufferInterval() {
    return this.bufferInterval;
  }

  setBufferBarrier(numberOfAds, oneShot) {
    this.bufferBarrier = numberOfAds;
    this.oneShotBarrier = (oneShot === undefined) ? true : oneShot;
    this.prioritize();

    return this;
  }

  clearBufferBarrier() {
    if (!this.hasBufferBarrier()) {
      console.warn("clearBufferBarrier had not effect because " +
        "no barrier was set.");
      return this;
    }

    this.bufferBarrier = null;
    this.prioritize();

    return this;
  }

  getBufferBarrier() {
    return this.bufferBarrier;
  }

  hasBufferBarrier() {
    return this.bufferBarrier !== null;
  }

  bufferBarrierIsEnabled() {
    return this.isEnabled.barrier;
  }

  bufferBarrierIsOneShot() {
    return this.oneShotBarrier;
  }

  setRefreshInterval(interval) {
    // Maybe warn for too low an interval
    this.refreshInterval = this.parseDuration.parseDuration(interval);
    this.validateInterval(this.refreshInterval, interval);
    this.enableRefreshInterval();
    this.prioritize();

    return this;
  }

  hasRefreshInterval() {
    return this.refreshInterval !== null;
  }

  refreshIntervalIsEnabled() {
    return this.isEnabled.refresh;
  }

  clearRefreshInterval() {
    if (!this.hasRefreshInterval()) {
      console.warn("clearRefreshInterval had no effect because " +
        "no refresh interval was set.");
    }

    this.disableRefreshInterval();
    this.prioritize();

    return this;
  }

  getRefreshInterval() {
    return this.refreshInterval;
  }

  isBuffering() {
    return this.isEnabled.barrier || this.isEnabled.interval;
  }

  has(option) {
    switch (option) {
      case Options.REFRESH: return this.hasRefreshInterval();
      case Options.INTERVAL: return this.hasBufferInterval();
      case Options.BARRIER: return this.hasBufferBarrier();
      default: throw new DFPRefreshError(`Invalid option '${option}'`);
    }
  }

  setPriority(option, priority) {
    this.ensureValidOption(option);
    this.ensureValidPriority(priority);
    this.priority[option] = priority;
    return this;
  }

  getPriority(option) {
    this.ensureValidOption(option);
    return this.priority[option];
  }

  setRefreshPriority(priority) {
    this.ensureValidPriority(priority);
    this.setPriority('refresh', priority);
  }

  getRefreshPriority() {
    return this.getPriority('refresh');
  }

  setBarrierPriority(priority) {
    this.ensureValidPriority(priority);
    this.setPriority('barrier', priority);
  }

  getBarrierPriority() {
    return this.getPriority('barrier');
  }

  setIntervalPriority(priority) {
    this.ensureValidPriority(priority);
    this.setPriority('interval', priority);
  }

  getIntervalPriority() {
    return this.getPriority('interval');
  }

  private ensureValidOption(option) {
    if (!(option in Options)) {
      throw new DFPRefreshError(`Invalid option '${option}'`);
    }
  }

  private ensureValidPriority(priority) {
    if (typeof priority !== `number`) {
      throw new DFPRefreshError(`Priority '${priority}' is not a number`);
    }
  }

  private enable(option, yes?) {
    if (yes === false) {
      this.disable(option);
      return;
    }

    switch (option) {
      case Options.REFRESH: this.enableRefreshInterval(); break;
      case Options.INTERVAL: this.enableBufferInterval(); break;
      case Options.BARRIER: this.enableBufferBarrier(); break;
      default: console.assert(false);
    }
  }

  /**
  * Disables the given option.
  * @param  {string} option The option to disable.
  */
  private disable(option) {
    switch (option) {
      case Options.REFRESH: this.disableRefreshInterval(); break;
      case Options.INTERVAL: this.disableBufferInterval(); break;
      case Options.BARRIER: this.disableBufferBarrier(); break;
      default: console.assert(false);
    }
    /* eslint-enable max-statements-per-line*/
  }

  private prioritize() {
    let options = Object.keys(Options).map(key => Options[key]);

    let available = options.filter(option => this.has(option));

    let priorities = available.map(option => this.priority[option]);
    let maximum = null;
    if (priorities.length > 0) {
      maximum = priorities.reduce((a, b) => Math.max(a, b));
    }

    for (let index = 0; index < available.length; ++index) {
      if (priorities[index] === maximum) {
        this.enable(available[index]);
      } else {
        this.disable(available[index]);
      }
    }
  }

  private refresh(tasks?) {
    console.assert(tasks === undefined || tasks !== null);
    // If 'tasks' was not passed at all, we refresh all ads
    if (tasks === undefined) {
      googletag.cmd.push(() => {
        googletag.pubads().refresh();
      });
      return;
    }

    // Do nothing for a null or empty buffer
    if (tasks.length === 0) return;

    tasks = tasks.filter(pair => pair !== null);

    googletag.cmd.push(() => {
      googletag.pubads().refresh(tasks.map(task => task.slot));
      tasks.forEach(task => task.deferred.resolve());
    });
  }

  private flushBuffer() {
    this.refresh(this.buffer);
    this.buffer = [];
  }

  private enableRefreshInterval() {
    const task = () => {
      this.clearBufferRespectingBarrier();
      this.refresh();
    };

    const promise = Observable.timer(this.refreshInterval, this.refreshInterval).subscribe(task);
    this.intervals.refresh = promise;
    this.isEnabled.refresh = true;
  }

  private disableRefreshInterval() {
    if (this.isEnabled.refresh) {
      this.cancelInterval('refresh');
      this.intervals.refresh = null;
      this.isEnabled.refresh = false;
    }
  }

  private enableBufferInterval() {
    const task = () => {
      this.refresh(this.buffer);
      this.clearBufferRespectingBarrier();
    };
    const promise = Observable.timer(this.bufferInterval, this.bufferInterval).subscribe(task);
    this.intervals.buffer = promise;
    this.isEnabled.interval = true;
  }

  private disableBufferInterval() {
    if (this.isEnabled.interval) {
      this.cancelInterval('buffer');
      this.intervals.buffer = null;
      this.isEnabled.interval = false;
    }
  }

  private enableBufferBarrier() {
    this.isEnabled.barrier = true;
  }

  private disableBufferBarrier() {
    this.isEnabled.barrier = false;
  }

  private clearBufferRespectingBarrier() {
    if (this.isEnabled.barrier) {
      for (let i = 0; i < this.buffer.length; ++i) {
        this.buffer[i] = null;
      }
    } else {
      this.buffer = [];
    }
  }

  private addSlotInterval(task, interval) {
    let parsedInterval = this.parseDuration.parseDuration(interval);
    this.validateInterval(parsedInterval, interval);

    const promise = Observable.timer(parsedInterval, parsedInterval).subscribe(() => {
      this.scheduleRefresh(task);
    });

    this.intervals[this.slotIntervalKey(task.slot)] = promise;
  }

  private slotIntervalKey(slot) {
    return slot.getSlotId().getDomId();
  }

  private scheduleRefresh(task) {
    if (this.isBuffering()) {
      this.bufferRefresh(task);
    } else {
      this.refresh([task]);
    }
  }

  private bufferRefresh(task) {
    this.buffer.push(task);
    if (!this.isEnabled[Options.BARRIER]) return;
    if (this.buffer.length === this.bufferBarrier) {
      this.flushBuffer();
      if (this.oneShotBarrier) {
        this.clearBufferBarrier();
      }
    }
  }

  private validateInterval(milliseconds, beforeParsing) {
    if (milliseconds < 500) {
      console.warn('Careful: ${beforeParsing} is quite a low interval!');
    }
  }
}
