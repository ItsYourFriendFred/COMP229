/*! 
File Name: Server/Models/contact.js
Student Name: Fred Wong
Student ID: 301199984 
Date: October 25, 2022
Last Updated: October 26

Defining a schema for a business contact for MongoDB
*/

// Import Mongoose
import mongoose from "mongoose";
const Schema = mongoose.Schema; // Alias for mongoose.Schema

// Create a Schema that matches the data
const ContactSchema = new Schema(
    {
        ContactName: String,
        ContactNumber: String,
        EmailAddress: String
    },
    {
        collection: "contacts"
    }
);

// Define index at schema level for alphabetical sorting
ContactSchema.index({ ContactName: 1 });

// Create a Model using the Schema
const Model = mongoose.model("Business_Contact", ContactSchema);

// Export the Model (to create a module from this file)
export default Model;