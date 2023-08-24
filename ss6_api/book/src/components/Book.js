import React from "react";

export const Book = ({ book, editBook, deleteBook }) => {
  return (
    <>
      <tr>
        <td>{book.title}</td>
        <td>{book.quantity}</td>
        <td>
          <button
            onClick={() => {
              editBook(book.id);
            }}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              deleteBook(book.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
