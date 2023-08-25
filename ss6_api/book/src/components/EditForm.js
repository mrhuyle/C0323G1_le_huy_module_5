import React from "react";
import { useState } from "react";

export const EditForm = ({ book, submitEdit, cancelEdit }) => {
  const [title, setTitle] = useState(book.title);
  const [quantity, setQuantity] = useState(book.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && quantity) {
      const id = book.id;
      submitEdit(title, quantity, id);
      setTitle("");
      setQuantity("");
    }
  };

  if (!book) {
    return null;
  }
  return (
    <>
      <div className="AddForm">
        <h3>Edit Book Form</h3>
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
            <button onClick={cancelEdit}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};
