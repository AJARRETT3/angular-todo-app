import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "asj4535"
  password: string = "";
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log('Username: ', this.username);
    if (this.username === "asj4535" && this.password === "dummy") {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
