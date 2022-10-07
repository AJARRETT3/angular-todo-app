import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "asj4535";
  password: string = "";
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  //Router


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log('Username: ', this.username);
    if (this.username === "asj4535" && this.password === "dummy") {
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
