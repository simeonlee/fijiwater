import React from 'react';
import logo from '../images/fiji-logo@2x.png';

const Nav = props => {
  return (
    <div className="nav">
      <div className="logo wow fadeIn" data-wow-duration="0.5s" data-wow-delay="0.5s"><img src={logo} /></div>
      <div className="nav-text nav-selection wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="1s">Water</div>
      <div className="nav-text nav-selection wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="1s">Extras</div>
      <div className="nav-text nav-selection wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="1s">Company</div>
      <div className="nav-text nav-selection wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay="1s">Contact</div>
    </div>
  )
}

export default Nav;