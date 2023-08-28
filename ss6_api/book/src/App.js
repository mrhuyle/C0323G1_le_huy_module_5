import { useEffect, useState } from "react";
import "./App.css";
import * as bookService from "./services/BookService";
import { AddForm } from "./components/AddForm";
import Swal from "sweetalert2";
import { EditForm } from "./components/EditForm";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/edit" element={<EditForm />} />
      </Routes>
    </>
  );
}
export default App;
