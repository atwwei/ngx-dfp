import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DfpModule } from 'ngx-dfp';

import * as videojs from 'video.js';
window['videojs'] = videojs;

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        children: [
          {
            path: '',
            loadChildren: './page/page.module#PageModule'
          },
          {
            path: ':page',
            loadChildren: './page2/page2.module#Page2Module'
          },
        ]
      }
    ]),
    DfpModule.forRoot({
      idleLoad: true,
      enableVideoAds: true,
      personalizedAds: false, // Request personalized ads by default
      singleRequestMode: true, // Only applies to initial refresh
      onSameNavigation: 'refresh',
      globalTargeting: {
        food: ['chicken', 'meatballs']
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
