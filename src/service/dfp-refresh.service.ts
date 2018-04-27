import { Injectable, EventEmitter, Optional, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Subscription } from 'rxjs/Subscription';
import { timer } from 'rxjs/observable/timer';
import { from } from 'rxjs/observable/from';
import 'rxjs/add/operator/toPromise';

import { DfpConfig } from '../class';
import { ParseDurationService } from './parse-duration.service';


class DFPRefreshError extends Error { }

declare var googletag;

@Injectable()
export class DfpRefreshService {

  refreshEvent: EventEmitter<any> = new EventEmitter();
  private intervals = {};

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    @Optional() private config: DfpConfig,
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
      const pubads = googletag.pubads(),
        ads = this.doc.querySelectorAll('dfp-ad'),
        slots = pubads.getSlots() as any[];
      if (ads.length === slots.length) {
        pubads.enableSingleRequest();
        googletag.enableServices();
        slots.forEach(s => {
          googletag.display(s.getSlotElementId());
        });
        pubads.refresh();
      }
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
