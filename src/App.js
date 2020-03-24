import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Main />
      <Projects />
      <Contacts /> */}
      <Router>
        <div>
          <Header />
          <Route
            className="main-wrapper"
            exact
            path="/personal-website-v2/"
            component={Main}
          />
          <Route path="/personal-website-v2/projects" component={Projects} />
          <Route path="/personal-website-v2/contacts" component={Contacts} />
        </div>
      </Router>
    </div>
  );
}

export default App;
