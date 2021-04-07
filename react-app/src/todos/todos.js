import React, { useContext } from "react";
import { TodosContext } from "./state-store/todos";
import "./todos.css";

function Todos() {
  const store = useContext(TodosContext);
  const {} = store;

  return (
    <main className="todos">
      <h1>Todos</h1>
    </main>
  );
}

export default Todos;
