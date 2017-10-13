# ngx-dfp

Semantic DoubleClick for Publishers (DFP by Google) integration with Angular v4.0.

```HTML
<dfp-ad [forceSafeFrame]="true" [collapseIfEmpty]="true" adUnit="/path-to-my/ad-unit" responsive refresh="6s" (afterRefresh)="refreshed($event)">
    <dfp-size [width]="320" [height]="50"></dfp-size>
    <dfp-size [width]="728" [height]="90"></dfp-size>
    <dfp-size [width]="970" [height]="90"></dfp-size>
    <dfp-targeting key="food">
        <dfp-value>chicken</dfp-value>
        <dfp-value>meatballs</dfp-value>
        <dfp-value>ice cream</dfp-value>
    </dfp-targeting>
</dfp-ad>
```

## IdleLoad

Load google script with IdleLoad provider, then dfp-ad will start work.
When the page is free, it will start loading.

```HTML
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DfpModule, IdleLoad } from 'ngx-dfp';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DfpModule
  ],
  providers: [IdleLoad],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## License

This project is released under the [Apache
License](https://www.apache.org/licenses/LICENSE-2.0). For more information, see
the LICENSE file.

