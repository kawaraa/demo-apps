import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { AddTodoForm } from './todos/add-todo-form/add-todo-form.component';
import { TodoList } from './todos/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    AddTodoForm,
    TodoList,
    RoutingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
