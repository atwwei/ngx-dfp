import { Directive, ElementRef, Input, Inject, forwardRef, OnInit, Optional } from '@angular/core';

import { DfpAdDirective } from './dfp-ad.directive';
import { DfpResponsiveDirective } from './dfp-responsive.directive';

@Directive({
  selector: 'dfp-size'
})
export class DfpSizeDirective implements OnInit {

  @Input() width: number;
  @Input() height: number;

  constructor(
    private elementRef: ElementRef,
    @Inject(forwardRef(() => DfpAdDirective))
    private ad: DfpAdDirective,
    @Optional() @Inject(forwardRef(() => DfpResponsiveDirective))
    private resp: DfpResponsiveDirective
  ) { }

  ngOnInit() {
    const target = this.resp || this.ad,
      innerText: string = this.elementRef.nativeElement.innerText;

    if (this.width && this.height) {
      target.addSize([this.width, this.height]);
    } else if (innerText.trim() !== '') {
      target.addSize(innerText);
    }
  }

}
