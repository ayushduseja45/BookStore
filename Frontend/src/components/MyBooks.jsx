import React from "react";
import Cards1 from "./Cards1"; // Ensure this path is correct

const MyBooks = ({ purchasedBooks, setPurchasedBooks }) => {
  const handleRemoveBook = (bookId) => {
    // Update purchasedBooks state to remove the book
    const updatedBooks = purchasedBooks.filter((book) => book._id !== bookId);
    setPurchasedBooks(updatedBooks);

    // Update local storage
    localStorage.setItem('purchasedBooks', JSON.stringify(updatedBooks));
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold">My Books</h2>
      {purchasedBooks.length === 0 ? (
        <p className="mt-4 text-gray-500">You have not purchased any books yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-4">
          {purchasedBooks.map((item) => (
            <div key={item._id} className="relative">
              <Cards1 item={item} />
              <button
                onClick={() => handleRemoveBook(item._id)} // Call handleRemoveBook on click
                className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
