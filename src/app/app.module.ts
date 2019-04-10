import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { InputComponent } from './input/input.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InputComponent,
    TodoItemComponent,
    ListManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TodoListService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
