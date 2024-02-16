import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from "src/app/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  
  @Input()
  todo: Todo = new Todo;
  active:any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter;
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter;

  onClick(todo : Todo) {
    this.todoDelete.emit(todo);
    console.log("Clicking on delete button")
  }

  onCheckBoxClick(todo:Todo){
    new this.todoCheckBox().emit(todo)
  }
}
