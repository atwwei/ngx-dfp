import {
  Directive, ElementRef,
  Inject, forwardRef,
  OnInit
} from '@angular/core';

import { DfpAdDirective } from './dfp-ad.directive';

@Directive({
  selector: 'dfp-exclusion'
})
export class DfpExclusionDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    @Inject(forwardRef(() => DfpAdDirective))
    private ad: DfpAdDirective
  ) {}

  ngOnInit() {
    this.ad.addExclusion(this.elementRef.nativeElement.innerText);
  }

}
