import { useEffect, useState } from "react";
import "./App.css";
import { Book } from "./components/Book";
import { Header } from "./components/Header";
import * as bookService from "./services/BookService";
import { AddForm } from "./components/AddForm";
import Swal from "sweetalert2";

function App() {
  // Book list state
  const [bookList, setBookList] = useState([]);
  // Id state
  const [id, setId] = useState(1);
  // Add book state:
  const [book, setBook] = useState({});
  // Show add form state
  const [showAddForm, setShowAddForm] = useState(false);
  // Effect for get list
  useEffect(() => {
    getAll();
  }, []);
  // Effect for get recent max id
  useEffect(() => {
    const maxId = bookList.reduce(
      (max, book) => (book.id > max ? book.id : max),
      0
    );
    setId(maxId + 1);
  }, [bookList]);

  // Get all function
  const getAll = async () => {
    const response = await bookService.getAll();
    console.log(response);
    setBookList((prev) => response);
  };
  // Auto increment id function
  const autoIncrement = () => {
    setId((prev) => prev + 1);
  };
  // To addForm
  const toAddForm = () => {
    setShowAddForm((prev) => !prev);
  };

  // Add book function
  const addBook = async (title, quantity) => {
    autoIncrement();
    const newBook = {
      id: id,
      title: title,
      quantity: quantity,
    };
    console.log(newBook);
    const response = await bookService.addBook(newBook);
    if (response.status === 201) {
      Swal.fire({
        title: response.statusText + " successfully",
        timer: 1000,
        icon: "success",
      });
    }
    getAll();
  };

  return (
    <>
      <Header toAddForm={toAddForm}></Header>
      <table>
        <thead>
          <th>Title</th>
          <th>Quantity</th>
          <th colSpan={2}>Actions</th>
        </thead>
        <tbody>
          {bookList.map((book) => {
            return <Book key={book.id} book={book}></Book>;
          })}
        </tbody>
      </table>
      {showAddForm && <AddForm addBook={addBook}></AddForm>}
    </>
  );
}

export default App;
