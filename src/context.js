import React, { Component } from "react";

const ProductContext = React.createContext();
//Provider === Gives our application access to all of our info/data
//Consumer === When we want to use the info/data that is available
// to us, we do it with th consumer

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="Hello from context">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
