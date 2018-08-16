import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DfpModule } from 'ngx-dfp';

import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    DfpModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageComponent
      }
    ])
  ]
})
export class PageModule { }
