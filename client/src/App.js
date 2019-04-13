import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavigationBar from "./components/NavigationBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSearch from "./pages/BookSearch.js";
import BookSaved from "./pages/BookSaved.js";
import NoMatch from "./pages/NoMatch.js";

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Router>
        <Wrapper>
            <Switch>
              <Route exact path="/" component={BookSearch} />
              <Route exact path="/saved" component={BookSaved} />
              <Route component={NoMatch} />
            </Switch>
            </Wrapper>
        </Router>
      </>
    );
  }
}

export default App;
