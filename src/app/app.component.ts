import { Component } from '@angular/core';

import { SAMPLES } from './const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  samples = SAMPLES;
}
