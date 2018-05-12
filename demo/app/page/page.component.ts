import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  title = 'ngx-dfp demo page 1';

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
