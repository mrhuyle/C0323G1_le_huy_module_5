import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as bookService from "../services/BookService.js";
import Swal from "sweetalert2";

export const EditForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let book = location.state.book;
  const [title, setTitle] = useState(book.title);
  const [quantity, setQuantity] = useState(book.quantity);
  const [bookId, setBookId] = useState(book.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && quantity) {
      const editBook = {
        title: title,
        quantity: quantity,
      };
      const response = await bookService.submitEdit(bookId, editBook);
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          title: "Edit successfully",
          icon: "success",
          timer: 1000,
        });
      } else {
        navigate("/edit");
      }
      navigate("/");
    }
    setTitle("");
    setQuantity("");
  };

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
            <Link to={"/"}>
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
