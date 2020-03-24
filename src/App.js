import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/main/Main";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Route className="main-wrapper" exact path="" component={Main} />
          <Route path="/projects" component={Projects} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    </div>
  );
}

export default App;
