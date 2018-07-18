import { Injectable, EventEmitter, Optional, Injector, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Subscription } from 'rxjs/Subscription';
import { timer } from 'rxjs/observable/timer';
import { from } from 'rxjs/observable/from';

import { DfpConfig, DFP_CONFIG } from '../class';
import { ParseDurationService } from './parse-duration.service';

class DFPRefreshError extends Error { }

declare var googletag;

@Injectable()
export class DfpRefreshService {

  refreshEvent: EventEmitter<any> = new EventEmitter();
  private refreshSlots = [];
  private singleRequest: Subscription;
  private intervals = {};

  constructor(
    @Optional() @Inject(DFP_CONFIG)
    private config: DfpConfig,
    private inject: Injector,
    private parseDuration: ParseDurationService
  ) { }

  slotRefresh(slot, refreshInterval?, initRefresh = false) {
    const deferred: Promise<any> = from([slot]).toPromise(),
      task = { slot: slot, deferred: deferred };

    deferred.then(() => {
      if (this.hasSlotInterval(slot)) {
        this.cancelInterval(slot);
      }
      if (refreshInterval) {
        this.addSlotInterval(task, refreshInterval);
      }
    });

    if (this.config.singleRequestMode === true && initRefresh) {
      // Use a timer to handle refresh of a single request mode
      this.refreshSlots.push(slot);
      if (this.singleRequest && !this.singleRequest.closed) {
        this.singleRequest.unsubscribe();
      }
      this.singleRequest = timer(100).subscribe(() => {
        const pubads = googletag.pubads();
        pubads.enableSingleRequest();
        googletag.enableServices();
        this.refreshSlots.forEach(s => {
          googletag.display(s.getSlotElementId());
        });
        pubads.refresh(this.refreshSlots);
        this.refreshSlots = [];
      });
    } else {
      googletag.display(slot.getSlotElementId());
      this.refresh([task]);
    }

    return deferred;
  }

  cancelInterval(slot) {
    if (!this.hasSlotInterval(slot)) {
      throw new DFPRefreshError('No interval for given slot');
    }

    const interval: Subscription = this.intervals[this.slotIntervalKey(slot)];
    interval.unsubscribe();
    delete this.intervals[slot];

    return this;
  }

  private hasSlotInterval(slot) {
    return this.slotIntervalKey(slot) in this.intervals;
  }

  private refresh(tasks?) {
    if (tasks === undefined) {
      googletag.cmd.push(() => {
        googletag.pubads().refresh();
      });
      return;
    }

    if (tasks.length === 0) { return false; }

    googletag.cmd.push(() => {
      googletag.pubads().refresh(tasks.map(task => task.slot));
      tasks.forEach(task => {
        Promise.resolve(task.slot);
      });
    });
  }

  private addSlotInterval(task, interval) {
    const parsedInterval = this.parseDuration.parseDuration(interval);
    this.validateInterval(parsedInterval, interval);

    const refresh = timer(parsedInterval, parsedInterval).subscribe(() => {
      const doc = this.inject.get(DOCUMENT);
      if (!this.hiddenCheck(doc.getElementById(task.slot.getSlotElementId()))) {
        this.refresh([task]);
        this.refreshEvent.emit(task.slot);
      }
    });

    this.intervals[this.slotIntervalKey(task.slot)] = refresh;

    return refresh;
  }

  private slotIntervalKey(slot) {
    return slot.getSlotId().getDomId();
  }

  private validateInterval(milliseconds, beforeParsing) {
    if (milliseconds < 1000) {
      console.warn('Careful: ${beforeParsing} is quite a low interval!');
    }
  }

  hiddenCheck(element: Element) {
    if (typeof (window) !== 'undefined') {
      const css = window.getComputedStyle(element);
      if (css.display === 'none') {
        return true;
      } else if (element.parentElement) {
        return this.hiddenCheck(element.parentElement);
      }
    }
    return false;
  }
}
