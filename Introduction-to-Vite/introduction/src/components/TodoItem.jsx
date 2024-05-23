import React from "react";
import "../App.css";
const TodoItem = ({ task, deletTodo, index }) => {
  return (
    <div className="todo-item">
      <p>{task}</p>
      <div className="button">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete" onClick={() => deletTodo(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
