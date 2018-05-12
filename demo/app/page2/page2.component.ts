import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {
  title = 'ngx-dfp demo page 2';

  constructor() { }

  ngOnInit() {
  }

  refreshed(event) {
    console.log(event);
    if (event.type === 'renderEnded') {
      console.log(event.data.isEmpty, event.data.size);
    }
  }

}
