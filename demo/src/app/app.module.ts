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
    DfpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
