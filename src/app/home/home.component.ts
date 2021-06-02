import { Component } from '@angular/core';

import { DfpService } from 'ngx-dfp';

import { DemoComponent } from '../demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends DemoComponent {
  constructor(
    dfp: DfpService
  ) {
    super(dfp);
  }
}
