import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import Storefront from './Storefront';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav />
        <Storefront />
      </div>
    )
  }
}