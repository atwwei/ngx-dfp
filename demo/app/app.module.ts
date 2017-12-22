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
