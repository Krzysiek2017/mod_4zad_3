import React from "react";
import style from "./TodoList.css";

const TodoList = props => {
  const lists = props.data.map(todo => (
    <li key={todo.id}>
      {todo.text} <button onClick={() => props.remove(todo.id)}>Done</button>
    </li>
  ));

  return (
    <div className={style.TodoList}>
      <ul>{lists}</ul>
    </div>
  );
};

export default TodoList;
