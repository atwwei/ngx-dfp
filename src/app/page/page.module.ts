import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DfpModule } from 'ngx-dfp';

import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    DfpModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageComponent
      }
    ])
  ]
})
export class PageModule { }
