import React from "react";

function NavigationBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand text-primary" href="#">Google Books</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link text-white" href="/">Search <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
    
export default NavigationBar;