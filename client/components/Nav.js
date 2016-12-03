import React from 'react';
import logo from '../images/fiji-logo@2x.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const Nav = props => {
  const bgStyle = {
    backgroundColor:'rgba(255, 255, 255, 0.8)',
    // backgroundColor: props.transformed ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '-99',
    top: '0',
    left: '0',
  };
  // const textStyle = {
  //   color: black,
  // };
  return (
    <div className={'nav' + (props.transformed ? ' transformed' : ' untransformed')}>
      {props.transformed ? <div style={bgStyle}></div> : null}
      <div className="logo wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s"><img src={logo} /></div>
      <div className={'nav-text nav-selection wow fadeInLeft' + (props.transformed ? ' black' : '')} data-wow-duration="0.5s" data-wow-delay="1s">Water</div>
      <div className={'nav-text nav-selection wow fadeInLeft' + (props.transformed ? ' black' : '')} data-wow-duration="0.5s" data-wow-delay="1s">Extras</div>
      <div className={'nav-text nav-selection wow fadeInLeft' + (props.transformed ? ' black' : '')} data-wow-duration="0.5s" data-wow-delay="1s">Company</div>
      <div className={'nav-text nav-selection wow fadeInLeft' + (props.transformed ? ' black' : '')} data-wow-duration="0.5s" data-wow-delay="1s">Contact</div>
    </div>
  )
}

export default Nav;