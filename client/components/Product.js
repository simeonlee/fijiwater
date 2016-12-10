import React from 'react';

// Component for each individual product
const Product = props => {
  var price = '' + props.defaultPriceInCents;
  price = '$' + price.slice(0, price.length - 2) + '.' + price[price.length - 2] + price[price.length - 1];
  return (
    <div className="product-list-item" onClick={props.addToCart} data-product-id={props.id}>
      <div className="product-list-item-image">
        <img src={props.mainImage.ref} />
      </div>
      <div className="product-list-item-text">{props.name}</div>
      <div className="product-list-item-text">{price}</div>
    </div>
  )
}

export default Product;