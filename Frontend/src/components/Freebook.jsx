
import React, { useState } from "react";
import Cards from "./Cards"; // Assuming you have a Cards component for displaying books

function Freebook() {
  const [book] = useState([
    {
      id: 1,
      title: "Learn JavaScript",
      author: "John Doe",
      description: "A comprehensive guide to JavaScript programming.",
      price: "Free",
      image: "/I1.jpeg",
      pdf: "/DWM_MiniProject_Report_N.pdf",
    },
    {
      id: 2,
      title: "React for Beginners",
      author: "Jane Smith",
      description: "An introduction to building web apps with React.",
      price: "Free",
      image: "/I2.jpg",
      pdf: "/DWM_MiniProject_Report_N.pdf",
    },
    {
      id: 3,
      title: "CSS Mastery",
      author: "Emily Johnson",
      description: "Master the art of styling web pages with CSS.",
      price: "Free",
      image: "/I4.jpeg",
    },
    {
      id: 4,
      title: "Node.js Essentials",
      author: "Michael Lee",
      description: "A guide to server-side JavaScript with Node.js.",
      price: "Free",
      image: "I5.jpeg",
    },
    {
      id: 5,
      title: "Python Programming",
      author: "David Brown",
      description: "Learn Python programming from scratch.",
      price: "Free",
      image: "I6.png",
    },
    {
      id: 6,
      title: "HTML & CSS Basics",
      author: "Sarah White",
      description: "A beginner's guide to HTML & CSS.",
      price: "Free",
      image: "I7.jpg",
    },
    {
      id: 7,
      title: "Fullstack Developer Handbook",
      author: "Chris Green",
      description: "Become a fullstack web developer.",
      price: "Free",
      image: "I8.jpeg",
    },
    {
      id: 8,
      title: "JavaScript Patterns",
      author: "Rebecca Adams",
      description: "Explore the best JavaScript patterns.",
      price: "Free",
      image: "I9.jpeg",
    },
  ]);

  const [selectedBook, setSelectedBook] = useState(null); // State to keep track of the selected book

  const handleBookClick = (book) => {
    setSelectedBook(book); // Update the selected book
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
        <div className="mb-4">
          <h1 className="font-semibold text-2xl pb-2">Free Offered Books</h1>
          <h2 className="text-lg text-gray-600">Check out our free books below:</h2>
        </div>

        {/* Horizontal scroll section */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-4">
            {book.map((item) => (
              <div key={item.id} onClick={() => handleBookClick(item)}>
                <Cards item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Show selected book description */}
        {selectedBook && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <h2 className="text-xl font-semibold">{selectedBook.title}</h2>
            <p className="text-sm text-gray-600">By {selectedBook.author}</p>
            <p className="text-sm mt-2">{selectedBook.description}</p>
            <div className="mt-4">
              <a
                href={selectedBook.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Read Book
              </a>
            </div>
            <button
              className="mt-2 text-blue-500 hover:underline"
              onClick={() => setSelectedBook(null)} // Reset selected book
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Freebook;
