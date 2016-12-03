import React from 'react';
import logo from '../images/fiji-logo@2x.png';
import logoNeg from '../images/fiji-logo-negative@2x.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const Nav = props => {
  return (
    <div className={'nav' + (props.transformed ? ' transformed' : ' untransformed')}>
      <div className="logo wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s">
        <img className={'logo-img' + (props.transformed ? ' transformed' : ' untransformed')} src={props.transformed ? logoNeg : logo} />
      </div>
      <div className={'nav-text wow fadeInLeft' + (props.transformed ? ' transformed' : ' untransformed')} data-wow-duration="0.5s" data-wow-delay="1s">Water</div>
      <div className={'nav-text wow fadeInLeft' + (props.transformed ? ' transformed' : ' untransformed')} data-wow-duration="0.5s" data-wow-delay="1s">Extras</div>
      <div className={'nav-text wow fadeInLeft' + (props.transformed ? ' transformed' : ' untransformed')} data-wow-duration="0.5s" data-wow-delay="1s">Company</div>
      <div className={'nav-text wow fadeInLeft' + (props.transformed ? ' transformed' : ' untransformed')} data-wow-duration="0.5s" data-wow-delay="1s">Contact</div>
    </div>
  )
}

export default Nav;