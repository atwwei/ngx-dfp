import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DfpModule } from 'ngx-dfp';

import { AppComponent } from './app.component';

import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PageComponent
      },
      {
        path: ':page',
        component: Page2Component
      }
    ]),
    DfpModule.forRoot({
      idleLoad: true,
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
