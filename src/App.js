import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import PerfumeDetail from "./components/PerfumeDetail";
import { CartProvider } from "./context/CartContext";
import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <CartProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/cart" component={Cart} />
            <Route path="/shop/:id" component={PerfumeDetail} />
          </Switch>
        </CartProvider>
      </div>
    </Router>
  );
};

export default App;
