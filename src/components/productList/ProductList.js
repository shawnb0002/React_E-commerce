import React, { Component } from "react";
import Product from "../product/Product";
import Title from "../title/Title";
import { ProductConsumer } from "../../context";

class ProductList extends Component {
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
                    return <Product key={product.id} product={product} />;
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
