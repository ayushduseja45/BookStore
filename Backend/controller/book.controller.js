

import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const createBook = async (req, res) => {
    const newBook = new Book(req.body); // Create a new instance of Book with the data from the request body
    try {
        const savedBook = await newBook.save(); // Save the new book to the database
        res.status(201).json(savedBook); // Respond with the created book and status 201
    } catch (error) {
        console.log("Error: ", error);
        res.status(400).json({ message: "Error creating book", error }); // Respond with a 400 status on error
    }
};
