import { Injectable, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class IdleService {

  private requestIdleCallback: any;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    zone: NgZone
  ) {
    const win: any = isPlatformBrowser(platformId) ? window : {};
    if (win.requestIdleCallback) {
      this.requestIdleCallback = (fun) => {
        return win.requestIdleCallback(fun);
      };
    } else {
      this.requestIdleCallback = (fun) => {
        return zone.runOutsideAngular(() => win.setTimeout(fun, 50));
      };
    }
  }

  request(fun) {
    this.requestIdleCallback(fun);
  }

}
