import React from "react";
import './bookcard.css';

function BookCard(props) {
    return (
        <div>
            <div data-_id={props.id} className="card">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <img src={props.image} width="150" className="img-fluid" />
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h4 className="card-title"><a className="article-link" target="_blank" rel="noopener noreferrer">{props.title}</a></h4>
                            <p className="card-text">{props.description}</p>
                            <h1 className="authors">{props.authors}</h1>
                            <a className="btn btn-primary View-Btn" href={props.link} target="_blank">View</a>
                            <a className="btn btn-success SaveBtn" href={props.link} target="_blank">Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
