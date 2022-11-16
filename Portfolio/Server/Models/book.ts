/*! 
File Name: Server/Models/contact.js
Student Name: Fred Wong
Date: October 25, 2022
Last Updated: October 26
Defining a schema for a business contact for MongoDB
*/

// Import Mongoose
import mongoose from "mongoose";
const Schema = mongoose.Schema; // Alias for mongoose.Schema

// Create a Schema that matches the data
const BookSchema = new Schema(
    {
        title: String,
        description: String,
        price: Number,
        author: String,
        genre: String
    },
    {
        collection: "books"
    }
);

// Define index at schema level for alphabetical sorting
BookSchema.index({ title: 1 });

// Create a Model using the Schema
const Model = mongoose.model("Book List", BookSchema);

// Export the Model (to create a module from this file)
export default Model;