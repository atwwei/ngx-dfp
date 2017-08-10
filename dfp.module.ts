import { NgModule } from '@angular/core';

import {
  HttpErrorService,
  ParseDurationService,
  ScriptInjectorService,
  DfpService, DfpIDGeneratorService, DfpRefreshService
} from "./service";

import {
  DfpAdDirective,DfpAdResponsive,
  DfpSizeDirective,
  DfpTargetingDirective, DfpExclusionDirective, DfpValueDirective
} from './directive';

import { DfpAudiencePixelDirective } from './dfp-audience-pixel.directive';

@NgModule({
  declarations: [
    DfpAdDirective,
    DfpAdResponsive,
    DfpSizeDirective,
    DfpTargetingDirective,
    DfpExclusionDirective,
    DfpValueDirective,
    DfpAudiencePixelDirective
  ],
  providers: [
    HttpErrorService,
    ParseDurationService,
    ScriptInjectorService,
    DfpService, DfpIDGeneratorService, DfpRefreshService
  ],
  exports: [
    DfpAdDirective,
    DfpAdResponsive,
    DfpSizeDirective,
    DfpTargetingDirective,
    DfpExclusionDirective,
    DfpValueDirective,
    DfpAudiencePixelDirective
  ]
})
export class DfpModule {

}
