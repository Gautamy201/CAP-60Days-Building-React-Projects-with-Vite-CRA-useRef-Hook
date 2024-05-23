import React, { useState } from "react";
import AddTodoComponent from "./AddTodoComponent";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todoData, setTodoData] = useState([]);

  const [task, setTask] = useState("");

  const addTodo = (task) => {
    const newTodoData = [...todoData, task];

    if (task.length !== 0) {
      setTodoData(newTodoData);
      setTask("");
    } else {
      alert("Please enter a task");
    }
  };

  const deletTodo = (index) => {
    const newTodoData = [...todoData];
    newTodoData.splice(index, 1);
    setTodoData(newTodoData);
  };
  return (
    <div>
      <div>
        <AddTodoComponent addTodo={addTodo} task={task} setTask={setTask} />
      </div>
      <div className="todoLists">
        {todoData.map((task, index) => {
          return (
            <TodoItem
              key={index}
              task={task}
              deletTodo={deletTodo}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
