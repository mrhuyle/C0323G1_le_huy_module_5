import React from "react";
import { Header } from "./Header";
import { Book } from "./Book";
import * as bookService from "../services/BookService.js";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // useNavigate
  const navigate = useNavigate();

  // Book list state
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState({});
  const [deleteState, setDeleteState] = useState(true);

  //   Effect getAll()
  useEffect(() => {
    getAll();
  }, [deleteState]);

  // Get all function
  const getAll = async () => {
    const response = await bookService.getAll();
    console.log(response);
    setBookList((prev) => response);
  };
  //Show edit form
  const editBook = async (id) => {
    const book = await bookService.getBookById(id);
    navigate("/edit", { state: { book: book } });
  };

  const deleteBook = (id) => {
    Swal.fire({
      title: "Do you want to delete book with " + id,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await bookService.deleteBook(id);
        if (response.status === 200) {
          Swal.fire({
            title: "Delete " + response.statusText,
            timer: 1000,
            icon: "success",
          });
          setDeleteState((prev) => !prev);
        }
      } else {
        Swal.fire("You choose to cancel delete book " + id);
      }
    });
  };

  if (!bookList) {
    return null;
  }
  return (
    <>
      <Header></Header>
      <table>
        <thead>
          <th>Title</th>
          <th>Quantity</th>
          <th colSpan={2}>Actions</th>
        </thead>
        <tbody>
          {bookList.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                deleteBook={deleteBook}
                editBook={editBook}
              ></Book>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
