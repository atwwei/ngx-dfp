import { Directive, AfterContentInit, Input, Inject, forwardRef } from '@angular/core';

import { DFPIncompleteError } from '../class';
import { DfpAdDirective } from './dfp-ad.directive';

@Directive({
  selector: 'dfp-targeting'
})
export class DfpTargetingDirective implements AfterContentInit {

  @Input() key: string;

  @Input()
  set value(val: string | Array<string>) {
    if (val instanceof Array) {
      val.forEach(v => this.addValue(v));
    } else {
      this.addValue(val);
    }
  }

  private values = [];

  constructor(
    @Inject(forwardRef(() => DfpAdDirective))
    private ad: DfpAdDirective
  ) { }

  ngAfterContentInit() {
    const targeting = this.getState();
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
    if (value && !this.values.find(item => item === value)) {
      this.values.push(value);
    }
  }

}
