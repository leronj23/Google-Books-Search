const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const BookSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  author: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    unique: true
  },
  image: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    unique: true
  },
  saved: {
		type: Boolean
	}
});

// This creates our model from the above schema, using mongoose's model method
module.exports = mongoose.model("Books", BookSchema);
