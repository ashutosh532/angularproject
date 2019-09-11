import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private rt:Router){}
  username;pwd;
  login_function(){
    var formref=<HTMLFormElement>document.getElementById("validuser")
    formref.submit()
    if(this.username == "admin@gmail.com" && this.pwd == 123456)
    {
     
    localStorage.setItem('aut','1')
     window.location.href="http://localhost:4200/emp"
     
    }
    else{
      alert("invalid credentials")
     // this.temp=false;
    }
  }
}
