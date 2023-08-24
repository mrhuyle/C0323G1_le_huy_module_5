import { useState } from "react";
import "./App.css";
import { Book } from "./components/Book";
import { Header } from "./components/Header";
import * as bookService from "./services/BookService";

function App() {
  // Book list state
  const [bookList, setBookList] = useState({});

  // Get all function
  const getAll = async () => {
    const response = await bookService.getAll();
    console.log(response);
  };

  return (
    <>
      <Header></Header>
      <table>
        <thead>
          <th>Title</th>
          <th>Quantity</th>
          <th>Actions</th>
        </thead>
      </table>
    </>
  );
}

export default App;
