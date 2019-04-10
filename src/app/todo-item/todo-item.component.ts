import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item:TodoItem;
  @Output() upTask: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  isInEditMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  editItem(){
    this.isInEditMode = true;
  }

  updateTask(newTask:any) {
    console.log(this.item);
    this.upTask.emit(this.item, newTask);
  }
}
