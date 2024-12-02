

import React, { useEffect, useState } from "react";
import Cards1 from "./Cards1"; // Ensure the path is correct
import axios from "axios";
import { Link } from "react-router-dom";
import MyBooks from './MyBooks'; // Ensure this path is correct

function Course() {
  const [books, setBooks] = useState([]); // Books available for purchase
  const [purchasedBooks, setPurchasedBooks] = useState(() => {
    // Retrieve purchased books from local storage if available
    const savedBooks = localStorage.getItem('purchasedBooks');
    return savedBooks ? JSON.parse(savedBooks) : []; // Parse JSON string to object
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book"); // Fetching books from your API
        setBooks(response.data); // Storing books in state
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const handleBuyBook = async (book) => {
    // Check if the book has already been purchased
    if (!purchasedBooks.some((b) => b._id === book._id)) {
      const updatedPurchasedBooks = [...purchasedBooks, book]; // Add the book to the purchased books array
      setPurchasedBooks(updatedPurchasedBooks); // Update state

      // Save to local storage
      localStorage.setItem('purchasedBooks', JSON.stringify(updatedPurchasedBooks));

      // Optional: Post to My Books collection
      try {
        await axios.post("http://localhost:4000/my-books", {
          userId: "user-id", // Replace with actual user ID if needed
          bookId: book._id, // Use _id for MongoDB
        });
        console.log("Book added to My Books successfully");
      } catch (error) {
        console.error("Error adding book to My Books:", error);
      }
    }
  };

  // Course.js

const Course = ({ searchQuery }) => {
  // Sample books data; replace this with your actual data
  const booksData = [
    { title: "The Art of Computer Programming", author: "Donald Knuth" },
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen" },
    { title: "Clean Code", author: "Robert C. Martin" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt" },
  ];

  const [books] = useState(booksData);

  // Filter the books based on the search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="course-container">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book, index) => <BookCard key={index} book={book} />)
      ) : (
        <p>No books found matching your search.</p>
      )}
    </div>
  );
};

//////...........................................


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl md:text-4xl">
            Welcome! <span className="text-pink-500">Enjoy our collection!</span>
          </h1>
          <p className="mt-12">Explore our wide range of books below:</p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {books.map((book) => (
            <div key={book._id} className="relative">
              <Cards1 item={book} /> {/* Render card component for each book */}
              <div className="absolute bottom-4 left-4">
                <span className="font-bold text-lg">{book.price} Rupee</span> {/* Display price */}
                <button
                  onClick={() => handleBuyBook(book)} // Call handleBuyBook on click
                  className="ml-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Display purchased books */}
        <MyBooks purchasedBooks={purchasedBooks} setPurchasedBooks={setPurchasedBooks} />
      </div>
    </>
  );
}

export default Course;
