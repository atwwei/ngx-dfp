import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DfpModule } from 'ngx-dfp';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
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
            path: '',
            loadChildren: ()=>import('./home/home.module').then(m => m.HomeModule)
          },
          {
            path: ':page',
            loadChildren: ()=>import('./page/page.module').then(m => m.PageModule)
          },
        ]
      }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
