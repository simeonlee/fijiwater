import React, { Component } from 'react';
import Product from './Product';

export default class Products extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    )
  }
}