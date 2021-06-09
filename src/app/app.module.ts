import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DfpModule } from 'ngx-dfp';

import { AppComponent } from './app.component';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    DfpModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'samples/:current',
            loadChildren: ()=>import('./samples/samples.module').then(m => m.SamplesModule)
          },
        ]
      }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
