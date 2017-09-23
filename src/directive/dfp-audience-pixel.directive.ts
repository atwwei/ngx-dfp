import {
  Directive, ElementRef,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: 'dfp-audience-pixel'
})
export class DfpAudiencePixelDirective implements OnInit {

  @Input() adUnit: string;
  @Input() segmentId: number;
  @Input() ppid: number;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    let axel = Math.random();
    let random = axel * 10000000000000;

    let adUnit = '';
    if (this.adUnit) {
      adUnit = `dc_iu=${this.adUnit}`;
    }

    let ppid = '';
    if (this.ppid) {
      ppid = `ppid=${this.ppid}`;
    }

    let pixel = document.createElement('img');

    pixel.src = 'https://pubads.g.doubleclick.net/activity;ord=';
    pixel.src += `${random};dc_seg=${this.segmentId};${adUnit}${ppid}`;

    pixel.width = 1;
    pixel.height = 1;
    pixel.border = '0';

    pixel.style.visibility = 'hidden';

    this.elementRef.nativeElement.append(pixel);
  }

}
