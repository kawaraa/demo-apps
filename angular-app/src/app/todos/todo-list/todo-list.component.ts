import { Component, Input, OnInit } from '@angular/core';
import { Todo } from "../../interface";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
  
export class TodoList implements OnInit {
  statuses: string[] = ["Hold", "In Progress", "Completed"];
  priorities: string[] = ["Low", "Medium", "Heigh"];
  @Input() todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {


  }

}
