import React, { useState } from "react";
import "../App.css";
const AddTodoComponent = ({ addTodo, task, setTask }) => {
  return (
    <div className="addtodo">
      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={(event) => setTask(event.target.value)}
      />
      <button onClick={() => addTodo(task)}>Add</button>
    </div>
  );
};

export default AddTodoComponent;
