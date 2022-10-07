import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos-component',
  templateUrl: './list-todos-component.component.html',
  styleUrls: ['./list-todos-component.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    {
      id: 1,
      description: 'Learn to Dance'
    },
    {
      id: 2,
      description: 'Become an Expert at Angular'
    },
    {
      id: 3,
      description: 'Visit India'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
