import { Component } from '@angular/core';

import { DfpService } from 'ngx-dfp';

import { BaseComponent } from './base.component';

@Component({
  selector: 'app-demo',
  template: '',
})
export class DemoComponent extends BaseComponent {
  title = 'ngx-dfp demo page';

  adUnitPath = '/6355419/Travel/Europe/France/Paris';

  // https://developers.google.com/publisher-tag/guides/ad-sizes
  size = [[300, 250], [728, 90], [750, 200]];

  // https://developers.google.com/publisher-tag/guides/ad-sizes#responsive_ads
  sizeMapping = [
    [[1024, 600], [[750, 200], [728, 90]]],
    [[640, 300], [300, 250]],
    [[0, 0], []]
  ];

  // https://developers.google.com/publisher-tag/guides/key-value-targeting
  targeting = {
    position: ['atf', 'btf'],
    color: 'red'
  };

  constructor(
    dfp: DfpService
  ) {
    super();
  }
}
