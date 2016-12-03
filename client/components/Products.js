import React from 'react';
import Product from './Product';
import PriceFilter from './PriceFilter';
import SortBy from './SortBy';

const Products = props => {
  var range = props.filterPriceRange;
  // console.log(props.filterPriceRange);
  // console.log(props.products);
  var productList = props.products.map((product, i) => {
    if (range.max === '+') {
      // console.log(product.defaultPriceInCents/100)
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
  // console.log(productList);
  return (
    <div className="products">
      <PriceFilter
        filterOn={props.filterOn}
        onFilterSelection={props.onFilterSelection}
        onFilterClear={props.onFilterClear}
        range={range}
        filters={props.filters}
      />
      <SortBy
        sortBy={props.sortBy}
        onSortSelection={props.onSortSelection}
      />
      <div className="section-title">{props.storeSection}</div>
      <div className="product-list">
        {productList}
      </div>
    </div>
  )
}

export default Products;