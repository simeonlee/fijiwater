import React, { Component } from 'react';
import Product from './Product';

const Products = props => {
  var products = props.products.map((product, i) => {
    return (
      <Product product={product} key={i} />
    )
  });
  return (
    <div className="products">
      {products}
    </div>
  )
}

export default Products;