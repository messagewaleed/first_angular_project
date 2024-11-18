import { Component } from '@angular/core';
import { Profile } from './Profile';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 profile !: Profile;

 constructor(){
  this.profile = new Profile();
  this.profile.name = "Apeksha";
  this.profile.designation = "Software Engineering Associate";
  this.profile.skills = "Java, JDBC, JPA, Spring";
  this.profile.contact = [
    "9999-999-878",
    "apeksha@gmail.com"
  ];
 }
}

// Two way data binding
//   - Banana in a box syntax [()]
