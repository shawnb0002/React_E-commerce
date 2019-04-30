import React, { Component } from "react";
import Product from "../product/Product";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

export default ProductList;
