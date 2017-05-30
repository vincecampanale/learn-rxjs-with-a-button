import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/buffer';


@Component({
  selector: 'app-root',
  styles: [`
    button {
      z-index: 100;
      opacity: 0.8;
    }
  `],
  template: `
  <button #btn md-raised-button color="accent">Button</button>
  <div class="container">
    <h1>{{message}}</h1>
  </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild('btn') btn;
  message: string;

  ngOnInit() {
    const rxBtn = this.getNativeElement(this.btn);
    const click$ = Observable.fromEvent(this.getNativeElement(this.btn), 'click');

    const debouncedClicks$ = click$.debounceTime(250);

    click$.buffer(debouncedClicks$).subscribe(val => console.log(val));
      
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
