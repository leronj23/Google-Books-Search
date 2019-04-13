import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavigationBar from "./components/NavigationBar";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSearch from "./pages/BookSearch.js";

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Jumbotron />
        <Router>
        <Wrapper>
            <Switch>
              <Route exact path="/" component={BookSearch} />
              {/* <Route exact path="/saved" component={Books} />
              <Route exact path="/books/:id" component={Detail} />
              <Route component={NoMatch} /> */}
            </Switch>
            </Wrapper>
        </Router>
      </>
    );
  }
}

export default App;
