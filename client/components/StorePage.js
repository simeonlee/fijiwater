import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Nav from './Nav';
import Landing from './Landing';
import Products from './Products';
import PriceFilter from './PriceFilter';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storePageSourceUrl: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js',
      site: '', // "fijiwater"
      name: '', // "Extras"
      pageTitle: '', // "Bottled Water Accessories | FIJI Water",
      vanityUrl: '', // extras
      extraInfo: '', // "Purchase FIJI Water Accessories ranging from Signature Silver Sleeves...
      products: [],
      productCount: 0, // 6
      bannerImage: '',
      bannerImageMobile: '',
      priority: 0, // 17
      state: 'NON_PUBLISHED', // NON_PUBLISHED
      currentBgUrl: '',
      filterOn: false,
      filterPriceRange: {
        min: 0,
        max: '+'
      },
    };
  }

  render() {
    return (
      <div className="storepage">
        <Nav pageTitle={this.state.pageTitle} />
        <Landing
          currentBgUrl={this.state.currentBgUrl}
          extraInfo={this.state.extraInfo}
          miniTitle={this.state.name}
        />
        <Products
          products={this.state.products}
          filterOn={this.state.filterOn}
          onFilterSelection={this.onFilterSelection.bind(this)}
          onFilterClear={this.onFilterClear.bind(this)}
          filterPriceRange={this.state.filterPriceRange}
        />
      </div>
    )
  }

  onFilterSelection(e) {
    var range = e.target.className.split(' ').slice(1,3);
    this.setState({
      filterOn: true,
      filterPriceRange: {
        min: parseInt(range[0]),
        max: range[1] === '+' ? range[1] : parseInt(range[1]),
      }
    });
    setTimeout(() => {
      console.log(this.state.filterPriceRange);
    },200)
  }

  onFilterClear(e) {
    this.setState({
      filterOn: false,
      filterPriceRange: {
        min: 0,
        max: '+',
      },
    });
    console.log('Cleared filter');
    setTimeout(() => {
      console.log(this.state.filterPriceRange);
    },200)
  }

  updateDimensions() {
    var currentBgUrl = window.innerWidth > 900 ? this.state.bannerImage : this.state.bannerImageMobile;
    this.setState({currentBgUrl});
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
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

        this.updateDimensions();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }
}