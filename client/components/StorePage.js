import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Nav from './Nav';
import Filter from './Filter';
import Sidebar from './Sidebar';
import Products from './Products';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: null,
      bannerImage: null,
      bannerImageMobile: null,
      extraInfo: null, // "Purchase FIJI Water Accessories ranging from Signature Silver Sleeves...
      name: null, // "Extras"
      site: null, // "fijiwater"
      pageTitle: null, // "Bottled Water Accessories | FIJI Water",
      priority: null, // 17
      productCount: null, // 6
      vanityUrl: null, // extras
      state: null, // NON_PUBLISHED
    }
  }

  componentDidMount() {
    axios.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
      .then((response) => {
        var response = JSON.parse(response.request.response);
        // for some reason this   ^^^^^^^^^^^^^^^^^^^^^^^^^
        // was the only location products could be found

        var products = response.products;
        var bannerImage = 'http://sneakpeeq-sites.s3.amazonaws.com/' + response.bannerImage.ref;
        var bannerImageMobile = 'http://sneakpeeq-sites.s3.amazonaws.com/' + response.bannerImageMobile.ref;
        var extraInfo = response.extraInfo; 
        var name = response.name;
        var site = response.site;
        var pageTitle = response.pageTitle;
        var priority = response.priority;
        var productCount = response.productCount;
        var vanityUrl = response.vanityUrl;
        var state = response.state;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Nav />
        <Filter />
        <Sidebar />
        <Products />
      </div>
    )
  }
}