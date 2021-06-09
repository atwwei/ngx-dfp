import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DfpModule } from 'ngx-dfp';

import { SamplesComponent } from './samples.component';

@NgModule({
  declarations: [
    SamplesComponent
  ],
  imports: [
    DfpModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SamplesComponent
      }
    ])
  ]
})
export class SamplesModule { }
