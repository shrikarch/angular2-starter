import { Component, OnInit,
  OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
