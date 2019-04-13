import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBZA-JAZcOGlR20CdqC5ycoI4Ag-FcaMbQ";

export default {
  // Get books
  getBooks: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // Get saved books
  getSavedBooks: function () {
    return axios.get("/api/savedBooks");
  },


  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },

};
