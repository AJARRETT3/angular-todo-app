import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting: string = "Welcome to My ToDo Application!";
  description: string = "This project is a vehicle for my learning of angular and spring boot.";
  message: string = "I hope that you can find it helpful in your life today."
}
