import { Component } from '@angular/core';
import { Link } from '../interface';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class Navbar  {
  show: boolean = false;
  links: Link[]  = [{ path: "", text: "Tic Tac Toe" }, {path:"todos", text:"Todos"}];

  showNavbar() {
    this.show = !this.show;
  }

}
