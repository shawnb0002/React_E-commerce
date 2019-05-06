import React, { Component } from "react";
import Product from "../product/Product";
import Title from "../title/Title";
import { storeProducts } from "../../data";
import { ProductConsumer } from "../../context";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="products" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  // console.log(value)
                  return value.products.map(product => {
                    return <Product product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      // <Product />
    );
  }
}

export default ProductList;
