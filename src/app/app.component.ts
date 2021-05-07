import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  data: any;

  constructor(private todos: TodoService) {
    this.todos.getData().subscribe(data =>{
      this.data = data;
      console.log(data)
    })
  }
}
