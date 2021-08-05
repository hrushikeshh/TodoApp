import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: Todo[]
  showValidationErrors!: boolean

  constructor(private dataservice: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos = this.dataservice.getAllTodos()
  } 

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true

    this.dataservice.addTodo(new Todo(form.value.text))

    this.showValidationErrors = false 
    form.reset()
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(Todo: Todo) {
    const index = this.todos.indexOf(Todo)

    let dialogRef = this.dialog.open(EditTodoDialogComponent,{
      width: '700px' ,
      data: Todo
    });

    dialogRef.afterClosed().subscribe((result)=> {
      if (result) {
        this.dataservice.updateTodo(index, result)
      }
    })
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.dataservice.deletedTodo(index)
  }

}
