import React from "react";
import TodoListTask from "./TodoListTask";

const TodoFunction = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
    <TodoListTask todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default TodoFunction;
