import {
  Directive, ElementRef,
  Input, Inject, forwardRef,
  OnInit
} from '@angular/core';

import { DfpTargetingDirective } from "./directive";

@Directive({
  selector: 'dfp-value'
})
export class DfpValueDirective implements OnInit {

  @Input() adTag: string;

  constructor(
    private elementRef: ElementRef,
    @Inject(forwardRef(() => DfpTargetingDirective))
    private targeting: DfpTargetingDirective
  ) { }

  ngOnInit() {
    this.targeting.addValue(this.elementRef.nativeElement.innerText);
  }

}
