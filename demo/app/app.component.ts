import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-dfp demo';

  refreshed(event) {
    console.log(event);
    if (event.type === 'renderEnded') {
      console.log(event.data.isEmpty, event.data.size);
    }
  }

}
