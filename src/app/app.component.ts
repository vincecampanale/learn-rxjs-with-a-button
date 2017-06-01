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
    const toLength = a => a.length;

    const rxBtn = this.getNativeElement(this.btn);
    const click$ = Observable.fromEvent(rxBtn, 'click');

    const debounced$ = click$.debounceTime(250);
    const buffered$ = click$.buffer(debounced$);

    const clickCount$ = buffered$.map(toLength);
    const doubleClick$ = clickCount$.filter(x => x === 2);

    doubleClick$.subscribe(event => this.message = "Double click!");

    /*
    Using method chaining and composition:
    
    click$
      .buffer(click$.debounceTime(250))
      .map(a => a.length)
      .filter(x => x === 2)
      .subscribe(e => this.message = "Double click!");
    */
  }

  getNativeElement(element) {
    return element._elementRef.nativeElement;
  }
}
