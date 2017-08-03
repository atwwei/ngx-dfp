import {
  Directive, ElementRef, ViewContainerRef,
  Input, Inject, forwardRef,
  OnInit
} from '@angular/core';

import { DfpAdDirective } from "./directive";

@Directive({
  selector: 'dfp-size'
})
export class DfpSizeDirective implements OnInit {

  @Input() width: number;
  @Input() height: number;

  constructor(
    private elementRef: ElementRef,
    viewContainerRef: ViewContainerRef,
    @Inject(forwardRef(() => DfpAdDirective))
    private ad: DfpAdDirective
  ) {
  }

  ngOnInit() {
    if (this.width && this.height) {
      this.ad.addSize([this.width, this.height]);
    } else {
      this.ad.addSize(this.elementRef.nativeElement.innerText);
    }
  }

}
