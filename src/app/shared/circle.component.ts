import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-circle',
  template: `<div #circle class="circle"></div>`
})
export class CircleComponent implements OnInit {
  @ViewChild('circle') circle;

  ngOnInit() {
  }
}
