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

// Create a Model using the Schema
const Model = mongoose.model("Business_Contact", ContactSchema);

// Export the Model (to create a module from this file)
export default Model;