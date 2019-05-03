import React, { Component } from "react";
import Product from "../product/Product";
import Title from "../title/Title";
import { storeProducts } from "../../data";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="products" />

            <div className="row" />
          </div>
        </div>
      </React.Fragment>
      // <Product />
    );
  }
}

export default ProductList;
