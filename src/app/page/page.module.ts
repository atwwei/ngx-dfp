import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DfpModule } from 'ngx-dfp';
import { DfpVideoModule } from 'ngx-dfp/video';

import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    DfpModule,
    DfpVideoModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageComponent
      }
    ])
  ]
})
export class PageModule { }
