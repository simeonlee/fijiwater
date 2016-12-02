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
      storePageSourceUrl: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js',
      site: null, // "fijiwater"
      name: null, // "Extras"
      pageTitle: null, // "Bottled Water Accessories | FIJI Water",
      vanityUrl: null, // extras
      extraInfo: null, // "Purchase FIJI Water Accessories ranging from Signature Silver Sleeves...
      products: [],
      productCount: null, // 6
      bannerImage: null,
      bannerImageMobile: null,
      priority: null, // 17
      state: null, // NON_PUBLISHED
    }
  }

  componentDidMount() {
    axios.get(this.state.storePageSourceUrl)
      .then((response) => {
        var response = JSON.parse(response.request.response);
        // for some reason this   ^^^^^^^^^^^^^^^^^^^^^^^^^
        // was the only location products could be found

        var site = response.site;
        var name = response.name;
        var pageTitle = response.pageTitle;
        var vanityUrl = response.vanityUrl;
        var extraInfo = response.extraInfo;
        var products = response.products;
        var productCount = response.productCount;
        var bannerImage = 'http://sneakpeeq-sites.s3.amazonaws.com/' + response.bannerImage.ref;
        var bannerImageMobile = 'http://sneakpeeq-sites.s3.amazonaws.com/' + response.bannerImageMobile.ref;
        var priority = response.priority;
        var state = response.state;

        this.setState({
          site,
          name,
          pageTitle,
          vanityUrl,
          extraInfo,
          products,
          productCount,
          bannerImage,
          bannerImageMobile,
          priority,
          state,
        });
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
        <Products products={this.state.products} />
      </div>
    )
  }
}