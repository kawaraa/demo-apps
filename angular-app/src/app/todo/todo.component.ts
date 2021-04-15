import { Component, Input, OnInit } from '@angular/core';
import { Todo } from "../interface";

@Component({
  selector: 'todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  statuses: string[] = ["Hold", "In Progress", "Completed"];
priorities: string[] = ["Low", "Medium", "Heigh"];
  // @Input() todos:Todo[]
  constructor() { }

  ngOnInit(): void {


  }

}
