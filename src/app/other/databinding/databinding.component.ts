import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = "Hey This is example string interpolaiton";
  onTest(){
    return true;
  };
  onClicked(value: string){
    alert(value);
  };

  setDisable = false;
  constructor(){
    setTimeout(() => {
      this.setDisable = true;
    },2000)
  }
}
