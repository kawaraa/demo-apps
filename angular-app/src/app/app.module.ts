import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar } from './navbar/navbar.component';
import { AddTodoForm } from './add-todo-form/add-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    AddTodoForm,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
