import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>{{title}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting: string = "Welcome to My ToDo Application!";
  description: string = "This project is a vehicle for my learning of angular and spring boot.";
  message: string = "I hope that you can find it helpful in your life today."
}
