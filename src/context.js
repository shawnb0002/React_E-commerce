import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider === Gives our application access to all of our info/data
//Consumer === When we want to use the info/data that is available
// to us, we do it with th consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  };

  handleDetail = () => {
    console.log("hello form detail");
  };

  addToCart = () => {
    console.log("hello form add To Cart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
