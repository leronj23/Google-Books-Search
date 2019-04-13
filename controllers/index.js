var model = require("../models");
const path = require("path");

module.exports = function (app) {

    // Save Books
    app.post("/api/books", model.save);

    // Get Saved Books
    app.get("/api/savedBooks", model.load);

    // Delete Book
    app.delete("/api/books/:id", model.remove);

    // Send every other request to the React app
    // If no API routes are hit, send the React app
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}
