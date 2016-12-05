import React from 'react';
import logo from '../images/fiji-logo@2x.png';
import cart from '../images/cart-icon@2x.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const Nav = props => {
  return (
    <div className={'nav' + (props.transformed ? ' transformed' : ' untransformed')}>
      <div className="nav-left">
        <div className="logo wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
          <img className={'logo-img' + (props.transformed ? ' transformed' : ' untransformed')} src={logo} />
        </div>
        <div className={'nav-text wow fadeInLeft' + (props.transformed ? ' transformed' : ' untransformed')} data-wow-duration="0.5s" data-wow-delay="1s">Water</div>
        <div className={'nav-text wow fadeInLeft' + (props.transformed ? ' transformed' : ' untransformed')} data-wow-duration="0.5s" data-wow-delay="1s">Extras</div>
        <div className={'nav-text wow fadeInLeft' + (props.transformed ? ' transformed' : ' untransformed')} data-wow-duration="0.5s" data-wow-delay="1s">Company</div>
        <div className={'nav-text wow fadeInLeft' + (props.transformed ? ' transformed' : ' untransformed')} data-wow-duration="0.5s" data-wow-delay="1s">Contact</div>
      </div>
      <div className="cart wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s" onClick={props.toggleCartVisibility}>
        <img className={'cart-img' + (props.transformed ? ' transformed' : ' untransformed')} src={cart} />
      </div>
    </div>
  )
}

export default Nav;