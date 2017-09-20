import { NgModule } from '@angular/core';

import {
  HttpErrorService,
  ParseDurationService,
  ScriptInjectorService,
  DfpService, DfpIDGeneratorService, DfpRefreshService
} from "./service";

import {
  DfpAdDirective, DfpAdResponsive,
  DfpSizeDirective,
  DfpTargetingDirective, DfpExclusionDirective, DfpValueDirective,
  DfpAudiencePixelDirective
} from './directive';

const DIRECTIVES = [
  DfpAdDirective, DfpAdResponsive,
  DfpSizeDirective,
  DfpTargetingDirective, DfpExclusionDirective, DfpValueDirective,
  DfpAudiencePixelDirective
];

const SERVICES = [
  HttpErrorService,
  ParseDurationService,
  ScriptInjectorService,
  DfpService, DfpIDGeneratorService, DfpRefreshService
];

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class DfpModule {

}
