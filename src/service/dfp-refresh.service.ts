import { Injectable, EventEmitter } from '@angular/core';

import { Observable, Subscription } from "rxjs/Rx";

import { ParseDurationService } from './index';

class DFPRefreshError extends Error { }

declare var googletag;

@Injectable()
export class DfpRefreshService {

  refreshEvent: EventEmitter<any> = new EventEmitter();
  private intervals = {};

  constructor(
    private parseDuration: ParseDurationService
  ) { }

  slotRefresh(slot, refreshInterval?) {
    let deferred: Promise<any> = Observable.from([slot]).toPromise(),
      task = { slot: slot, deferred: deferred };

    deferred.then(() => {
      if (this.hasSlotInterval(slot)) {
        this.cancelInterval(slot);
      }
      if (refreshInterval) {
        this.addSlotInterval(task, refreshInterval);
      }
    })

    this.refresh([task]);

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

    if (tasks.length === 0) return;

    googletag.cmd.push(() => {
      googletag.pubads().refresh(tasks.map(task => task.slot));
      tasks.forEach(task => {
        Promise.resolve(task.slot);
      });
    });
  }

  private addSlotInterval(task, interval) {
    let parsedInterval = this.parseDuration.parseDuration(interval);
    this.validateInterval(parsedInterval, interval);

    let refresh = Observable.timer(parsedInterval, parsedInterval).subscribe(() => {
      this.refresh([task]);
      this.refreshEvent.emit(task.slot);
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
}
