import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DfpModule } from 'ngx-dfp';

import { Page2Component } from './page2.component';

@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    DfpModule,
    RouterModule.forChild([
      {
        path: '',
        component: Page2Component
      }
    ])
  ]
})
export class Page2Module { }
