import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { RouterModule } from '@angular/router';

import { DfpConfig } from './class';

import {
  IdleLoad,
  HttpErrorService,
  ParseDurationService,
  ScriptInjectorService,
  DfpService, DfpIDGeneratorService, DfpRefreshService
} from './service';

import {
  DfpAdDirective, DfpAdResponsiveDirective,
  DfpSizeDirective,
  DfpTargetingDirective, DfpExclusionDirective, DfpValueDirective,
  DfpAudiencePixelDirective
} from './directive';

const DIRECTIVES = [
  DfpAdDirective, DfpAdResponsiveDirective,
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
  imports: [
    RouterModule
  ],
  declarations: [
    ...DIRECTIVES
  ],
  providers: [
    ...SERVICES,
    { provide: DfpConfig, useValue: {} }
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class DfpModule {
  static forRoot(config?: DfpConfig): ModuleWithProviders {
    return {
      ngModule: DfpModule,
      providers: [
        ...(config && config.idleLoad === true ? [IdleLoad] : []),
        { provide: DfpConfig, useValue: config || {} }
      ]
    };
  }
}
