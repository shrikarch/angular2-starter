import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-test',
  templateUrl: './databinding-test.component.html',
  styleUrls: ['./databinding-test.component.css']
})
export class DatabindingTestComponent implements OnInit {

username = "";

isDisabled(){
  if(this.username == ""){
    return true;
  }else{
    return false;
  }
}

resetUsername(){
  this.username = "";
}

  constructor() { }

  ngOnInit() {
  }

}
