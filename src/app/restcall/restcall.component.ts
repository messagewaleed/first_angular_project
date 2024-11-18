import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'restcall',
  templateUrl: './restcall.component.html',
  styleUrl: './restcall.component.css'
})
export class RestcallComponent {

  userName : string = "";

  responseData !: any;

  constructor(private httpClient : HttpClient){

  }

  ngOnInit(){
    // let obs = this.httpClient.get("https://api.github.com/users");
    // obs.subscribe((response)=> console.log(response));
  }

  searchUserOnGitHub(){
    this.httpClient.get("https://api.github.com/users/" + this.userName)
    .subscribe((response) => {
      this.responseData = response;
      console.log(this.responseData);
    });
    ;
  }
}
