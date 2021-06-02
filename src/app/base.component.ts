import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnDestroy {
  private _destory = new Subject<boolean>();

  ngOnDestroy() {
    this._destory.next(true);
    this._destory.unsubscribe();
  }

  get destory() {
    return this._destory;
  }
}
