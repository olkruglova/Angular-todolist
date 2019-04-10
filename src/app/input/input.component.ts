import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title:string = "Angular"

  generatePlaceholder():string {
    return 'New todo item ...';
  }

  @Output() submit: EventEmitter<string> = new EventEmitter();

  submitValue(newTitle: string) {
    console.log(newTitle);
    this.submit.emit(newTitle);
  }

  constructor() { }

  ngOnInit() {
  }

}
