
import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class Todos implements OnInit {

  // constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    // this.route.paramMap.subscribe((params) => console.log(params.get("paramName")));
  }

}
