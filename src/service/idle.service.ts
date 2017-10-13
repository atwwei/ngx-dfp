import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class IdleService {

  private requestIdleCallback: any;

  constructor(private zone: NgZone) {
    let win = window as any;
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
