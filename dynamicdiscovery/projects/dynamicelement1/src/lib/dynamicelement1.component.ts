import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-dynamicelement1',
  template: `
    <div class="element-style1">
      dynamicelement1 works!
    </div>
  `,
  styles: []
})
export class Dynamicelement1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
