import React from 'react';

const Product = props => {
  console.log(props);
  return (
    <div className="product">
      <div className="product-name">{props.name}</div>
      <div className="product-price">{props.defaultPriceInCents}</div>
      <img className="product-image" src={props.mainImage.ref} />
    </div>
  )
}

export default Product;