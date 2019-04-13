// Import all required npm libraries
var mongoose = require("mongoose");
var express = require("express");
var logger = require("morgan");
var path = require ('path');

// Sets up the Express App
const PORT = process.env.PORT || 3001;
const app = express();

// If deployed, use the deployed database. Otherwise use the local NYT Sports database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Use morgan logger for logging requests
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// Import routes and controllers and give the server access to them.
// require("./controllers")(app);
// require("./routes")(app);

// Start the server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
