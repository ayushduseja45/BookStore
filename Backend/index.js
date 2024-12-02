
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"; // Import the contact route

const app = express();

dotenv.config(); // Load environment variables from .env file

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
+
(async () => {
    try {
        await mongoose.connect(URI); // Removed deprecated options
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
})();

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute); // Add contact route

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
