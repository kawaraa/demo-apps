import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicTacToe } from './tic-tac-toe/tic-tac-toe.component';
import { Todos } from './todos/todos.component';

const routes: Routes = [{
  path: "",
  component:TicTacToe,
},{
  path:"todos",
  component:Todos
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [TicTacToe, Todos];
