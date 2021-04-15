
import { Component, OnInit } from '@angular/core';
import { Todo } from "../interface";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class Todos implements OnInit {
todos: Todo[] = [{id:"7654s5xc", task:"ewkfb", status:0, priority:1, timestamp:Date.now()}]
  constructor() { }

  ngOnInit(): void {
  
  }

}
