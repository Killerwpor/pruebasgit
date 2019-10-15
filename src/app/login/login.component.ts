import { User } from './../user';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  testUser: User = 
  {
    username: "waygroup",
    password: "dreamhouse"
  }

  inputUsername: string;
  inputPass: string;

  TryLogin(){
    if(this.inputUsername == this.testUser.username && this.inputPass == this.testUser.password){
      window.history.pushState(null, "Title", "/dash/chart-panel");
      window.history.go(0);
    }
    else{
      console.log("Contrasenia o usuario errado");
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
