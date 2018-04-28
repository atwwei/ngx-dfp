import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

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
    const providers: any[] = [
      { provide: DfpConfig, useValue: config || {} }
    ];
    if (config && config.idleLoad === true) {
      providers.push(IdleLoad);
    }
    return {
      ngModule: DfpModule,
      providers: providers
    };
  }
}
