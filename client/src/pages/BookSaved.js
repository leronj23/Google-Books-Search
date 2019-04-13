import React, { Component } from "react";
import DeleteBookCard from "../components/DeleteBookCard";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";

class BookSaved extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getSavedBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    handleDelete = id => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Jumbotron />
                <div>
                    {this.state.books.map(book => (
                        //console.log(book._id),
                        <DeleteBookCard
                            handleDelete={this.handleDelete}
                            key={book._id}
                            id={book._id}
                            title={book.title}
                            buttonTitle="Delete"
                            author={book.authors !== undefined ? book.authors.join(', ') : null}
                            description={book.description}
                            image={book.image !== undefined ? book.image : null}
                            link={book.infoLink}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default BookSaved;
