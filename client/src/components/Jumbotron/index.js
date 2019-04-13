import React from "react";
import './jumbotron.css';

function Jumbotron() {
    return (
        <div className="container-fluid mt-4">
            <div className="jumbotron text-center">
                <div className="jumbotronHeader"><strong>(React Google Books Search)</strong></div>
                <p><strong>Search for and Save Books of Interest!</strong></p>
            </div>
        </div>
    );
}

export default Jumbotron;
