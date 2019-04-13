import React, { Component } from "react";
import SaveBookCard from "../components/SaveBookCard";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";

class BookSearch extends Component {

    state = {
        books: [],
        search: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();

        if (this.state.search) {
            API.getBooks(this.state.search)
                .then(res => this.setState({ books: res.data.items }))
                .catch(err => console.log(err));
        }
    }

    savedBook = bookInfo => {
        API.saveBook(bookInfo)
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <div className="card">
                    <div className="card-body">
                        Book Search
                    <input type="text" value={this.state.search} onChange={this.handleInputChange} className="form-control" />
                        <br />
                        <button type="button" className="btn btn-primary float-right" onClick={this.handleFormSubmit}>Search</button>
                    </div>
                </div>

                <div>
                    {this.state.books.map(book => (
                        //console.log(book.volumeInfo.authors),
                        <SaveBookCard
                            savedBook={this.savedBook}
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            buttonTitle="Save"
                            author={book.volumeInfo.authors !== undefined ? book.volumeInfo.authors.join(', ') : null}
                            description={book.volumeInfo.description}
                            image={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : null}
                            link={book.volumeInfo.infoLink}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default BookSearch;
