import React from "react";
// import "./App.css";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
import Main from "./components/Main";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/fortniteApp" exact component={Main} />
          <Route path="/fortniteApp/about" component={About} />
          <Route path="/fortniteApp/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
