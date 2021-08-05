import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    //new Todo('this is a test!', false),
   // new Todo(' Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit volpoluter becausz of that devil was running outta there in the ground i donno why thst shit happwened.', true)
  ]

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }

  deletedTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
