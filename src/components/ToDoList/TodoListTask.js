import React from "react";

const TodoListTask = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div className="todochecklist">
      <label>
        <input
          className="todos"
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      <span className="tasks"> {todo.name}</span>
    </div>
  );
};

export default TodoListTask;
