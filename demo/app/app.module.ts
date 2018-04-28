import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DfpModule } from 'ngx-dfp';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DfpModule.forRoot({
      idleLoad: true,
      singleRequestMode: true, // Only applies to initial refresh
      globalTargeting: {
        food: ['chicken', 'meatballs']
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
