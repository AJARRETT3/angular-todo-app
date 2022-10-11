import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public isCompleted: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos-component',
  templateUrl: './list-todos-component.component.html',
  styleUrls: ['./list-todos-component.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
