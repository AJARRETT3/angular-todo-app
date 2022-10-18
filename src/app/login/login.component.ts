import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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


  constructor(private router: Router,
    private hardcodedApplicationService: HardcodedAuthenticationService ) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.hardcodedApplicationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
