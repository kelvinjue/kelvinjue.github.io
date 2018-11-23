import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <body>
        <Router>
          <Switch>
            <Route
              className="main-wrapper"
              exact
              path="/personal-website-v2/"
              component={Main}
            />
            <Route path="/personal-website-v2/projects" component={Projects} />
            <Route path="/personal-website-v2/contacts" component={Contacts} />
          </Switch>
        </Router>
      </body>
    );
  }
}

export default App;
