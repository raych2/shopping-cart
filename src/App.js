import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, count) => {
    let newItem = [...cartItems, { brand: product.brand, name: product.name, image: product.image, price: product.price, quantity: count }];
    setCartItems(newItem);
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" render={() => <Shop cartItems={cartItems} addToCart={addToCart}/>} />
          <Route path="/cart" render={() => <Cart cartItems={cartItems} addToCart={addToCart}/>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
