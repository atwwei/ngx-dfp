import { Directive, Inject, forwardRef, Input, OnInit } from '@angular/core';

import { DfpAdDirective } from './dfp-ad.directive';

@Directive({
  selector: 'dfp-responsive'
})
export class DfpResponsiveDirective implements OnInit {

  @Input() viewport = [0, 0];
  @Input() adSizes = [];

  constructor(
    @Inject(forwardRef(() => DfpAdDirective))
    private ad: DfpAdDirective
  ) { }

  ngOnInit() {
    this.ad.addResponsiveMapping(this.getState());
  }

  @Input()
  set viewWidth(val: number) {
    if (val > 0) {
      this.viewport[0] = val;
    }
  }

  @Input()
  set viewHeight(val: number) {
    if (val > 0) {
      this.viewport[1] = val;
    }
  }

  addSize(size) {
    this.adSizes.push(size);
  }

  getState() {
    return Object.freeze({
      viewportSize: this.viewport,
      adSizes: this.adSizes
    });
  }
}
