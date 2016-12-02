import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';

const Products = props => {
  var productList = props.products.map((product, i) => {
    return (
      <Product {...product} key={i} />
    )
  });
  return (
    <div className="products">
      <Filter />
      <div className="product-list">
        {productList}
      </div>
    </div>
  )
}

export default Products;