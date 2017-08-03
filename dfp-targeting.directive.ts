import { Directive, ElementRef, Input } from '@angular/core';

import { DFPIncompleteError } from "./dfp-errors.class";

@Directive({
  selector: 'dfp-targeting'
})
export class DfpTargetingDirective {

  @Input() key: string;

  @Input()
  set value(val: string) {
    if (val && !this.values.find(item => item == val)) {
      this.values.push(val);
    }
  }

  private values: any[];

  constructor(
    private elementRef: ElementRef
  ) {
    this.values = [];
  }

  checkValid() {
    if (this.key === undefined) {
      throw new DFPIncompleteError('dfp-targeting', 'key', true);
    }
    if (this.values.length === 0) {
      throw new DFPIncompleteError('dfp-targeting', 'value', true);
    }
  }

  getState = function () {
    this.checkValid();
    return Object.freeze({
      key: this.key,
      values: this.values
    });
  }

  addValue = function (value) {
    this.values.push(value);
  }

}
