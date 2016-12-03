import React from 'react';

const Nav = props => {
  return (
    <div className="nav">
      <div className="nav-text logo">{props.pageTitle.split(' | ')[1]}</div>
      <div className="nav-text nav-selection">Water</div>
      <div className="nav-text nav-selection">Extras</div>
      <div className="nav-text nav-selection">Company</div>
      <div className="nav-text nav-selection">Contact</div>
    </div>
  )
}

export default Nav;