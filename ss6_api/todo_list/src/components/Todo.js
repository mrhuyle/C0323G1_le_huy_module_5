import React from "react";

export const Todo = ({ todo }) => {
  if (todo.completed) {
    return (
      <div className="Todo">
        <li>{todo.title}</li>
      </div>
    );
  }
};
