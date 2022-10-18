import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

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

  todos: Todo[]

  message: string

  constructor(
    private service: TodoDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.service.retrieveAllTodos('asj4535').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  createTodo() {
    this.router.navigate(['todos', -1]);
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

  deleteTodo(id) {
    this.service.deleteTodo('asj4535', id).subscribe(
      response => {
        this.message = `Delete of todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
}
