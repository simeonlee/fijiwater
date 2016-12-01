import React from 'react';

const Product = (props) => {
  return (
    <div className="product">
      <div className="product-name">{props.name}</div>
      <div className="product-price">{props.price}</div>
      <img className="product-image" src={props.image} />
    </div>
  )
}

export default Product;