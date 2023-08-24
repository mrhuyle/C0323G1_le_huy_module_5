import React from "react";

export const Header = ({ toAddForm }) => {
  return (
    <div className="Header">
      <h2>Library</h2>
      <button className="add_btn" onClick={toAddForm}>
        Add a new Book
      </button>
    </div>
  );
};
