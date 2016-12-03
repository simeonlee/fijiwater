import React from 'react';

const Product = props => {
  // console.log(props);
  var price = '' + props.defaultPriceInCents;
  price = '$' + price.slice(0, price.length - 2) + '.' + price[price.length - 2] + price[price.length - 1];
  // console.log(price);
  return (
    <div className="product-list-item">
      <div className="product-list-item-image">
        <img src={props.mainImage.ref} />
      </div>
      <div className="product-list-item-text">{props.name}</div>
      <div className="product-list-item-text">{price}</div>
    </div>
  )
}

export default Product;