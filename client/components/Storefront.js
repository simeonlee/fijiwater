import React, { Component } from 'react';
import Filter from './Filter';
import Sidebar from './Sidebar';
import Products from './Products';

export default class Storefront extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="storefront">
        <Filter />
        <Sidebar />
        <Products />
      </div>
    )
  }
}