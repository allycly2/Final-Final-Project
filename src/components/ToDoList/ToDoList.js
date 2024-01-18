import { useState, useRef, useEffect } from "react";
import ToDoFunction from "./ToDoFunction";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.css";
import Sidebar from "../NavBar/Sidebar";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const name = todoNameRef.current.value.trim();
    if (name === "") return;
    const newTodo = { id: uuidv4(), name: name, completed: false };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="navigation">
        <Sidebar />
      </div>
      <div className="todolist">
        <span className="todotext">Task </span>
        <br></br>
        <form onSubmit={handleAddTodo}>
          <input type="text" ref={todoNameRef} className="taskinput"></input>
          <div>
            <button className="ToDoButton" type="submit">
              Add Task
            </button>
            <br></br>
            <button className="ToDoButton" onClick={handleClear}>
              Delete Task
            </button>
          </div>
        </form>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="tasknum">
          Tasks Left: {todos.filter((todo) => !todo.completed).length}
        </div>
      </div>
      <div className="wrapper">
        <ToDoFunction todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}

export default ToDoList;
