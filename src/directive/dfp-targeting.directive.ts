import { Directive, ElementRef, AfterContentInit, Input, Inject, forwardRef } from '@angular/core';

import { DFPIncompleteError } from '../class';
import { DfpAdDirective } from './index';

@Directive({
  selector: 'dfp-targeting'
})
export class DfpTargetingDirective implements AfterContentInit {

  @Input() key: string;

  @Input()
  set value(val: string) {
    if (val && !this.values.find(item => item === val)) {
      this.values.push(val);
    }
  }

  private values: any[];

  constructor(
    @Inject(forwardRef(() => DfpAdDirective))
    private ad: DfpAdDirective
  ) {
    this.values = [];
  }

  ngAfterContentInit() {
    let targeting = this.getState();
    this.ad.addTargeting(targeting);
  }

  checkValid() {
    if (this.key === undefined) {
      throw new DFPIncompleteError('dfp-targeting', 'key', true);
    }
    if (this.values.length === 0) {
      throw new DFPIncompleteError('dfp-targeting', 'value', true);
    }
  }

  getState() {
    this.checkValid();
    return Object.freeze({
      key: this.key,
      values: this.values
    });
  }

  addValue(value) {
    this.values.push(value);
  }

}
