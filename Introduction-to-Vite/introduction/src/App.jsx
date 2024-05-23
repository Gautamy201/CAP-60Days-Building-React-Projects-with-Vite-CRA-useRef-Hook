import "./App.css";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <>
      <h1 className="title">To-Do List App</h1>
      <div>
        <TodoApp />
      </div>
    </>
  );
};

export default App;
