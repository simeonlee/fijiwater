import React from 'react';

const Cart = props => {
  var cartList = props.cart.map((productId, i) => {
    var res = [];
    for (var i = 0; i < props.products.length; i++) {
      var product = props.products[i];
      var price = '' + product.defaultPriceInCents;
      price = '$' + price.slice(0, price.length - 2) + '.' + price[price.length - 2] + price[price.length - 1];
      if (parseInt(product.id) === parseInt(productId)) {
        return (
          <div className="cart-list-product" key={i} data-product-id={product.id} onClick={props.removeFromCart}>
            <div className="cart-list-product-img"><img src={product.mainImage.ref} /></div>
            <div className="cart-list-product-text">
              <div className="cart-list-product-name">{product.name}</div>
              <div className="cart-list-product-price">{price}</div>
            </div>
          </div>
        )
      }
    }
  });
  return (
    <div className={'cart-modal' + (props.transformed ? ' transformed' : ' untransformed') + (props.visible ? ' visible' : ' invisible')}>
      {cartList}
    </div>
  )
}

export default Cart;