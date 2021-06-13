import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <CartProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/cart" component={Cart} />
            <Route path="/shop/:id"  />
          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
};

export default App;
