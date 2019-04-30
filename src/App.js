import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import ProductList from "./components/productList/ProductList";
import Product from "./components/product/Product";
import Details from "./components/details/Details";
import Cart from "./components/cart/Cart";
import Default from "./components/Default";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Bootstrap from 'bootstrap'

class App extends Component {
  render() {
    return (
      //react fragment
      <React.Fragment>
        <NavBar />

        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
