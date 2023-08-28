import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as bookService from "../services/BookService.js";
import Swal from "sweetalert2";

export const AddForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  console.log(title);
  console.log(quantity);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = {
      title: title,
      quantity: quantity,
    };

    if (title && quantity) {
      const response = await bookService.addBook(newBook);
      if (response.status === 201) {
        Swal.fire({
          title: response.statusText + " successfully",
          timer: 1000,
          icon: "success",
        });
        setTitle("");
        setQuantity("");
        navigate("/");
      } else {
        navigate("/add");
      }
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
            <Link to={"/"}>
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
