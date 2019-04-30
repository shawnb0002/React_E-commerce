import React, { Component } from "react";
import ReactDOM from "react-dom";
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
        <h3>Hello from app</h3>
        <ProductList />
      </React.Fragment>
    );
  }
}

export default App;
