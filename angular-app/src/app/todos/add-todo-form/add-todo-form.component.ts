import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[add-todo-form]',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoForm implements OnInit {
  priorities: string[] = ["Low", "Medium", "Heigh"];
  statuses: string[]  = ["Hold", "In Progress", "Completed"];

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(e:any) {
    console.log(e.target.value);
  }
  
  handleSubmit(e: Event) {
    e.preventDefault();
    console.log(e);

  }

}
