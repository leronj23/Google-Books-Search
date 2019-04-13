// Import all required npm libraries
var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");
var path = require('path');

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
// Import routes and/or controllers and give the server access to them.
require("./controllers")(app);

// Send every other request to the React app
// If no API routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT);
});
