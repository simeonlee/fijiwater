import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

export default class Products extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
      .then((response) => {
        var response = JSON.parse(response.request.response);
        // for some reason this   ^^^^^^^^^^^^^^^^^^^^^^^^^
        // was the only location products could be found
        var products = response.products;
        var bannerImage = response.bannerImage.ref;
        var bannerImageMobile = response.bannerImageMobile.ref;
        var extraInfo = response.extraInfo; // "Purchase FIJI Water Accessories ranging from Signature Silver Sleeves to FIJI Water Car Cup Holders. Accessorize your FIJI Water today!"
        var name = response.name; // Extras
        // var displayName = response.displayName; // same as name
        var site = response.site; // fijiwater
        // var siteCode = response.siteCode; // same as site
        var pageTitle = response.pageTitle; // "Bottled Water Accessories | FIJI Water",
        var priority = response.priority; // 17
        var productCount = response.productCount; // 6
        var vanityUrl = response.vanityUrl; // extras
        // var createdAt = response.createdAt; // 1424306663000
        // var id = response.id; // 5098
        var state = response.state; // NON_PUBLISHED
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    )
  }
}