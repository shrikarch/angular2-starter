import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

serverName = "nop";
isvisible = false;
serverStatus: string = 'offline';
servers = ['serverOne','serverTwo'];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  onClicked(){
    this.servers.push(this.serverName)
    this.isvisible = true;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
