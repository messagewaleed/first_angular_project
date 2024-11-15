import { Component } from '@angular/core';

@Component({
  selector: 'other',
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  message : string = "Hey there, how are you?";
  length : number = 1024;
  currentDateTime !: string;

  divide(first : number, second : number){
    return first / second;
  }

constructor(){
  setInterval(
    () =>{
      let currentTime = new Date();
      this.currentDateTime = currentTime.toLocaleTimeString();
    }
  , 1000);
}


}
