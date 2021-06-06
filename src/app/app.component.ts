import { Component } from '@angular/core';

import { DfpService, SlotOnloadEvent } from 'ngx-dfp';
import { filter, takeUntil } from 'rxjs/operators';

import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends BaseComponent {
  adUnitPath = '/6355419/Travel/Europe/France/Paris';
  constructor(
    dfp: DfpService
  ) {
    super();
    dfp.events.pipe(
      takeUntil(this.destory),
      filter(event => event instanceof SlotOnloadEvent)
    ).subscribe((e) => {
      console.log(e)
    });

    dfp.pushCmd(() => {
      // More settings: https://developers.google.com/publisher-tag/samples
      googletag.pubads().enableSingleRequest();
      googletag.pubads().collapseEmptyDivs();
    });
  }
}
