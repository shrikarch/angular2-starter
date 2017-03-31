import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-twowaybinding',
  template: `
    <input type="text" [(ngModel)]="metadata">
    <input type="text" [(ngModel)]="metadata">
  `,
  styles: []
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
