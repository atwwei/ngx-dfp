import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { DfpConfig, } from './class';
import { DFP_CONFIG } from './service/injection_token';

import { IdleService } from './service/idle.service';
import { HttpErrorService } from './service/http-error.service';
import { ParseDurationService } from './service/parse-duration.service';
import { ScriptInjectorService } from './service/script-injector.service';
import { DfpService } from './service/dfp.service';
import { DfpIDGeneratorService } from './service/dfp-id-generator.service';
import { DfpRefreshService } from './service/dfp-refresh.service';

import { DfpAdDirective } from './directive/dfp-ad.directive';
import { DfpSizeDirective } from './directive/dfp-size.directive';
import { DfpResponsiveDirective } from './directive/dfp-responsive.directive';
import { DfpAdResponsiveDirective } from './directive/dfp-ad-responsive.directive';
import { DfpTargetingDirective } from './directive/dfp-targeting.directive';
import { DfpExclusionDirective } from './directive/dfp-exclusion.directive';
import { DfpValueDirective } from './directive/dfp-value.directive';
import { DfpAudiencePixelDirective } from './directive/dfp-audience-pixel.directive';

const DIRECTIVES = [
  DfpAdDirective,
  DfpSizeDirective,
  DfpResponsiveDirective,
  DfpAdResponsiveDirective,
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

  ],
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
  static forRoot(config?: DfpConfig): ModuleWithProviders {
    return {
      ngModule: DfpModule,
      providers: [
        ...(config && config.idleLoad === true ? [IdleService] : []),
        { provide: DFP_CONFIG, useValue: config || {} }
      ]
    };
  }
}
