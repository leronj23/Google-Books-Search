const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const BookSchema = new Schema({
  title: type: String,
  author: type: String,
  description: String,
  image: String,
  link: String,
  saved: Boolean
});

// This creates our model from the above schema, using mongoose's model method
module.exports = mongoose.model("Books", BookSchema);
