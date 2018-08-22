import { Component, OnInit, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';

import { DfpVideoDirective } from 'ngx-dfp/video';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  title = 'ngx-dfp demo page 1';

  @ViewChild(DfpVideoDirective) dfpVideo: DfpVideoDirective;

  adInput = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  refreshed(event) {
    console.log(event);
    if (event.type === 'renderEnded') {
      console.log(event.data.isEmpty, event.data.size);
    }
  }

  adEvent(event) {
    console.log(event);
    if (event.type === 'complete') {
      // hide ad container
      this.dfpVideo.adContainer.style.zIndex = '-1';
    }
    if (event.type === 'start') {
      // show ad container
      this.dfpVideo.adContainer.style.zIndex = '1';
    }
  }
}
