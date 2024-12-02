
import express from "express";
import { getBook, createBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook); // GET route to fetch books
router.post("/", createBook); // POST route to create a new book

export default router;
