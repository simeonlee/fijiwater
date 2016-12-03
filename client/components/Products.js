import React, { Component } from 'react';
import Product from './Product';
import PriceFilter from './PriceFilter';

const Products = props => {
  var range = props.filterPriceRange;
  // console.log(props.filterPriceRange);
  // console.log(props.products);
  var productList = props.products.map((product, i) => {
    if (range.max === '+') {
      console.log(product.defaultPriceInCents/100)
      if (product.defaultPriceInCents/100 >= range.min) {
        return (
          <Product {...product} key={i} />
        )
      }
    } else {
      if ((product.defaultPriceInCents/100 >= range.min) && (product.defaultPriceInCents/100 <= range.max)) {
        return (
          <Product {...product} key={i} />
        )
      }
    }
  });
  console.log(productList);
  return (
    <div className="products">
      <PriceFilter
        filterOn={props.filterOn}
        onFilterSelection={props.onFilterSelection}
        onFilterClear={props.onFilterClear}
        range={range}
      />
      <div className="product-list">
        {productList}
      </div>
    </div>
  )
}

export default Products;