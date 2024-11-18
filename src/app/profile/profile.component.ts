import { Component, Input } from '@angular/core';
import { Profile } from '../Profile';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  // @Input('userName') userName !: string;

  // @Input('designation') designation !: string;

  @Input("profile") theProfile !: Profile;

  @Input('value') value : string = "Default Value";

  //profile : any;

  constructor(){
    
  }

  ngOnInit(){
    
  }

  showContactDetails() {
    console.log("Button was clicked...");
    
    }

}

// Making Rest API calls from Angular
// - HttpClient
