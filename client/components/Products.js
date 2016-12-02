import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';
import Sidebar from './Sidebar';

const Products = props => {
  var products = props.products.map((product, i) => {
    return (
      <Product {...product} key={i} />
    )
  });
  return (
    <div className="products">
      <Filter />
      <Sidebar />
      {products}
    </div>
  )
}

export default Products;