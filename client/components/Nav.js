import React from 'react';
import logo from '../images/fiji-logo@2x.png';

const Nav = props => {
  return (
    <div className="nav">
      <div className="logo"><img src={logo} /></div>
      <div className="nav-text nav-selection">Water</div>
      <div className="nav-text nav-selection">Extras</div>
      <div className="nav-text nav-selection">Company</div>
      <div className="nav-text nav-selection">Contact</div>
    </div>
  )
}

export default Nav;