import React, { useContext, useState } from "react";
import todoService from "../../service/todos";
import { TodosContext } from "../state-store/todos";

const EditTodo = ({ todo, setEdit }) => {
  const { setLoading, setError, updateTodo } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState({ task: "", priority: "Low", status: "uncompleted" });

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const todo = await todoService.update(newTodo);
    if (todo.error) setError(todo.error);
    else updateTodo(newTodo);
    setEdit(false);
    setLoading(false);
    e.target.reset();
  };

  return (
    <form onChange={handleChange} onSubmit={handleUpdate} className="todo-items form">
      <textarea type="text" name="task" defaultValue={todo.task} className="textarea-field" required />
      <div className="select">
        <label>Status</label>
        <select name="status" defaultValue={todo.status}>
          <option value="uncompleted">Not Completed</option>
          <option value="inprogress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn left-btn">
        Update
      </button>
      <button type="button" onClick={() => setEdit(false)} className="btn right-btn">
        Cancel
      </button>
    </form>
  );
};

export default EditTodo;
