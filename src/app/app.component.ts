import { Component } from '@angular/core';
import { DfpService } from 'ngx-dfp';

import { SAMPLES } from './const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  samples = SAMPLES;
  constructor(dfp: DfpService) {
    dfp.appendCmdScript({
      innerHTML: ' googletag.pubads().enableSingleRequest();'
    });
  }
}
