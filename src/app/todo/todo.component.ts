import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  name:string = "Olga";
  title:string = "My todo";
  userLoggedIn:boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
