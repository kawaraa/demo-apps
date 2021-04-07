import React, { useContext, useEffect } from "react";
import { TodosContext } from "./state-store/todos";
import todoService from "../service/todos";
import Loading from "../layout/loading/loading";
import AddTodoForm from "./add-todo-form/add-todo-form";
import Todo from "./todo/todo";
import "./todos.css";

function Todos() {
  const { loading, error, setError, todos, setTodos } = useContext(TodosContext);

  useEffect(() => {
    (async () => {
      const todos = await todoService.get();
      if (todos.error) setError(todos.error);
      else setTodos(todos);
    })();
  });

  if (loading) return <Loading />;
  if (error) return <p className="todos-error">{error}</p>;

  const todoComponents = todos.map((todo) => <Todo todo={todo} />);
  return (
    <main className="todos container">
      <h1>Todos</h1>
      <AddTodoForm />

      {todos[0] ? <ul className="todos-wrapper">{todoComponents}</ul> : <p>There are no todos.</p>}
    </main>
  );
}

export default Todos;
