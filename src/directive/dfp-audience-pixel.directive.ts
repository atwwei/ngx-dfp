import {
  Directive, ElementRef,
  Input,
  OnInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'dfp-audience-pixel'
})
export class DfpAudiencePixelDirective implements OnInit {

  @Input() adUnit: string;
  @Input() segmentId: number;
  @Input() ppid: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const axel = Math.random(),
        random = axel * 10000000000000;

      let adUnit = '';
      if (this.adUnit) {
        adUnit = `dc_iu=${this.adUnit}`;
      }

      let ppid = '';
      if (this.ppid) {
        ppid = `ppid=${this.ppid}`;
      }

      const pixel = document.createElement('img');

      pixel.src = 'https://pubads.g.doubleclick.net/activity;ord=';
      pixel.src += `${random};dc_seg=${this.segmentId};${adUnit}${ppid}`;

      pixel.width = 1;
      pixel.height = 1;
      pixel.border = '0';

      pixel.style.visibility = 'hidden';

      this.elementRef.nativeElement.append(pixel);
    }
  }
}
