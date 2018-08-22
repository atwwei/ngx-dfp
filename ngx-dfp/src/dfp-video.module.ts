import { NgModule } from '@angular/core';

import { DfpIDGeneratorService } from './service/dfp-id-generator.service';
import { DfpVideoDirective } from './directive/dfp-video.directive';

@NgModule({
  declarations: [
    DfpVideoDirective
  ],
  exports: [
    DfpVideoDirective
  ],
  providers: [
    DfpIDGeneratorService
  ]
})
export class DfpVideoModule {

}
