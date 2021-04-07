import React, { createContext, useState } from "react";

export const TodosContext = createContext();

const TodosStore = (props) => {
  const dateFormat = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const updateTodo = (todo) => {
    const index = todos.findIndex((t) => t.id !== todo.id);
    todos[index].task = todo.task;
    todos[index].status = todo.status;
    todos[index].priority = todo.priority;
    todos[index].timestamp = Date.now();
  };
  const deleteTodo = (todo) => {
    // todos.splice(index, 1);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  const state = {
    loading,
    setLoading,
    error,
    setError,
    todos,
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    dateFormat,
  };

  return <TodosContext.Provider value={state}>{props.children}</TodosContext.Provider>;
};

export default TodosStore;
