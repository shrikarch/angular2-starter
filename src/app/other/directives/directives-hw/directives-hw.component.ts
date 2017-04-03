import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-hw',
  templateUrl: './directives-hw.component.html',
  styleUrls: ['./directives-hw.component.css']
})
export class DirectivesHwComponent implements OnInit {
showPassword = false;
logins = [];

  constructor() { }

  ngOnInit() {
  }

  onClicked(){
    this.showPassword = true;
    this.logins.push(+ new Date());
  }

}
