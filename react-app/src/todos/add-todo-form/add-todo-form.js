import React, { useContext, useState } from "react";
import { TodosContext } from "../state-store/todos";
import todoService from "../../service/todos";

const AddTodo = () => {
  const { setLoading, setError, addTodo } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState({ task: "", priority: "Low", status: "uncompleted" });

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const todo = await todoService.create(newTodo);
    if (todo.error) setError(todo.error);
    else addTodo(todo);
    setLoading(false);
    e.target.reset();
  };

  return (
    <form id="add-todo-form" onSubmit={handleSubmit}>
      <textarea
        className="textarea-field"
        type="text"
        name="task"
        onChange={handleChange}
        placeholder="Task"
        required
      />

      <div id="priority-status">
        <div className="select">
          <label>Priority: </label>
          <select name="priority" onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Heigh">Heigh</option>
          </select>
        </div>
        <div className="select">
          <label>Status: </label>
          <select name="status" onChange={handleChange}>
            <option value="uncompleted">Not Completed</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
