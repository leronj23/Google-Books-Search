import React, { Component } from "react";
import BookCard from "../components/BookCard";
import API from "../utils/API";

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
    };

    render() {
        return (
            <div>
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
                    console.log(book.volumeInfo.authors),
                    <BookCard
                        // selectedFriend={this.selectedFriend}
                        key={book.id}
                        id={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors !== undefined ? book.volumeInfo.authors.join(', ') : null}

                        //authors={book.volumeInfo.authors}
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
