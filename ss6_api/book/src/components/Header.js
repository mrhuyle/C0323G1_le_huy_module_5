import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <h2>Library</h2>
      <Link to={"/add"}>
        <button className="add_btn">Add a new Book</button>
      </Link>
    </div>
  );
};
