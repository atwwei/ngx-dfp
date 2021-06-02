import { ModuleWithProviders, NgModule } from '@angular/core';

import { DfpAdDirective } from './directive/dfp-ad.directive';
import { DfpService } from './service/dfp.service';

@NgModule({
  declarations: [
    DfpAdDirective,
  ],
  exports: [
    DfpAdDirective,
  ]
})
export class DfpModule {
  static forRoot(): ModuleWithProviders<DfpModule> {
    return {
      ngModule: DfpModule,
      providers: [
        DfpService,
      ]
    };
  }
}
