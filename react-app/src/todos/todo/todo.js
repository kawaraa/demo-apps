import React, { useContext, useState } from "react";
import { TodosContext } from "../state-store/todos";
import todoService from "../../service/todos";
import "./todo.css";
import EditTodo from "../edit-todo/edit-todo";

const Todo = ({ todo }) => {
  const { setLoading, setError, deleteTodo, dateFormat } = useContext(TodosContext);
  const [edit, setEdit] = useState("");

  const onDelete = async () => {
    setLoading(true);
    const result = await todoService.delete(todo.id);
    if (result.error) setError(result.error);
    else deleteTodo(todo);
    setLoading(false);
  };

  if (edit) return <EditTodo todo={todo} setEdit={setEdit} />;
  return (
    <div className="todo-items">
      <span className="item-task">{todo.task} </span>
      <span className="item-date">{new Date(todo.timestamp).toLocaleDateString("en-US", dateFormat)}</span>
      <span className="item-priority"> {todo.priority}</span>
      <span className="item-status">
        {todo.status}
        <button type="button" onClick={() => setEdit(true)} className="btn left-btn">
          Edit
        </button>
        <button type="button" onClick={onDelete} className="btn right-btn">
          Delete
        </button>
      </span>
    </div>
  );
};

export default Todo;
