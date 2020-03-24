import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route className="main-wrapper" path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
