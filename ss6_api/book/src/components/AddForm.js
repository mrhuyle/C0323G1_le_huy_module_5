import React from "react";
import { useState } from "react";

export const AddForm = ({ addBook, cancel }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  console.log(title);
  console.log(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(quantity);
    if (title && quantity) {
      addBook(title, quantity);
      setTitle("");
      setQuantity("");
    }
  };

  return (
    <>
      <div className="AddForm">
        <h3>Add Book Form</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
          </div>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
          </div>
          <div>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button onClick={cancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};
