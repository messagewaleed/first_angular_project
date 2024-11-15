import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {


  profile : any;

  constructor(){
    this.profile = {
      name : 'Akshay',
      designation : 'Software Engineer',
      skills : 'HTML, CSS, JS, React',
      contact : [
        '9999-788-999',
        '6767-909-888',
        'akshay@socgen.com',
        'akshay@gmail.com'
      ]
    }
  }

  showContactDetails() {
    console.log("Button was clicked...");
    
    }

}
