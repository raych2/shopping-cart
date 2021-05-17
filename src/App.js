import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
