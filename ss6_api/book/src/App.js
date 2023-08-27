import { useEffect, useState } from "react";
import "./App.css";
import { Book } from "./components/Book";
import { Header } from "./components/Header";
import * as bookService from "./services/BookService";
import { AddForm } from "./components/AddForm";
import Swal from "sweetalert2";
import { EditForm } from "./components/EditForm";

function App() {
  // Book list state
  const [bookList, setBookList] = useState([]);
  // Id state
  const [id, setId] = useState(1);
  // Add book state:
  const [book, setBook] = useState({});
  // Delete state:
  const [deleteId, setDeleteId] = useState(false);
  // Show add form state
  const [showAddForm, setShowAddForm] = useState(false);
  // Show add form state
  const [showEditForm, setShowEditForm] = useState(false);
  // Effect for get list
  useEffect(() => {
    getAll();
  }, [book, deleteId, showEditForm]);
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
    setShowAddForm((prev) => true);
  };

  // Add book function
  const addBook = async (title, quantity) => {
    autoIncrement();
    const newBook = {
      id: id,
      title: title,
      quantity: quantity,
    };

    const response = await bookService.addBook(newBook);
    if (response.status === 201) {
      Swal.fire({
        title: response.statusText + " successfully",
        timer: 1000,
        icon: "success",
      });
    }
    setShowAddForm(false);
  };

  // Cancel add Form function
  const cancelAdd = () => {
    setShowAddForm(false);
  };

  // Cancel edit Form function
  const cancelEdit = () => {
    setShowEditForm(false);
  };

  // Delete function
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
        }
        setDeleteId((prev) => !prev);
      } else {
        Swal.fire("You choose to cancel delete book " + id);
      }
    });
  };

  //Show edit form
  const editBook = async (id) => {
    alert(id);
    const response = await bookService.getBookById(id);
    console.log(book);
    setShowEditForm(true);
    setBook(response);
  };

  // Submit edit:
  const submitEdit = async (title, quantity, id) => {
    alert("submit edit");
    const editBook = {
      title: title,
      quantity: quantity,
    };
    const response = await bookService.submitEdit(id, editBook);
    setShowEditForm(false);
    console.log(response);
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
      {showAddForm && (
        <AddForm addBook={addBook} cancelAdd={cancelAdd}></AddForm>
      )}
      {showEditForm && (
        <EditForm
          book={book}
          cancelEdit={cancelEdit}
          submitEdit={submitEdit}
        ></EditForm>
      )}
    </>
  );
}
export default App;
