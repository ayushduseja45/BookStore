// BookCard.js
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
  );
};

export default BookCard;
