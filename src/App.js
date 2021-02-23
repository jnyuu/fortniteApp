import React from "react";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Main from "./components/Main";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about"exact component={About} />
          <Route path="/shop"exact component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
