import {
  Directive, ElementRef,
  Inject, forwardRef,
  OnInit
} from '@angular/core';

import { DfpTargetingDirective } from './dfp-targeting.directive';

@Directive({
  selector: 'dfp-value'
})
export class DfpValueDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    @Inject(forwardRef(() => DfpTargetingDirective))
    private targeting: DfpTargetingDirective
  ) { }

  ngOnInit() {
    this.targeting.addValue(this.elementRef.nativeElement.innerText);
  }

}
