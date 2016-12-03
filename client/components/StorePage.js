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
      filters: [
        {
          min: 0,
          max: 15,
          text: 'Up to $15',
        },
        {
          min: 15,
          max: 25,
          text: '$15 - $25',
        },
        {
          min: 25,
          max: '+',
          text: 'Over $25',
        }
      ],
      sortBy: 'Featured',
      navTransformed: false, // set to true after scroll a certain distance
      updateScroll: true,
    };
  }

  render() {
    return (
      <div className="storepage">
        <Nav
          pageTitle={this.state.pageTitle}
          transformed={this.state.navTransformed}
        />
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
          storeSection={this.state.name}
          filters={this.state.filters}
          sortBy={this.state.sortBy}
          onSortSelection={this.onSortSelection.bind(this)}
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

  onSortSelection(e) {
    var sortBy = e.target.innerHTML;
    console.log(this.state.products);
    this.setState({sortBy});
    // sort products array
    var products = this.state.products;
    var toggleComparison = 1; // 1 for don't toggle, -1 for toggle
    if (sortBy === 'Featured') {
      var param = 'ordinal';
    } else if (sortBy === 'Name') {
      var param = 'name';
    } else if (sortBy === 'Price - low to high') {
      var param = 'defaultPriceInCents';
    } else if (sortBy === 'Price - high to low') {
      var param = 'defaultPriceInCents';
      toggleComparison = -1;
    } else if (sortBy === 'Newest') {
      var param = 'createdAt';
      toggleComparison = -1;
    };
    products.sort((a, b) => {
      if (a[param] < b[param]) {
        return -1 * toggleComparison; // toggle, if activated, just reverses the sign
      } else if (a[param] > b[param]) {
        return 1 * toggleComparison;
      }
      return 0;
    });
    this.setState({products});
  }

  updateDimensions() {
    var currentBgUrl = window.innerWidth > 900 ? this.state.bannerImage : this.state.bannerImageMobile;
    this.setState({currentBgUrl});
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
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




    setInterval(() => {
      this.handleScroll();
    }, 500)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  getScrollOffsets() {
    var doc = document, w = window;
    var x, y, docEl;
    
    if ( typeof w.pageYOffset === 'number' ) {
      x = w.pageXOffset;
      y = w.pageYOffset;
    } else {
      docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
              doc.documentElement: doc.body;
      x = docEl.scrollLeft;
      y = docEl.scrollTop;
    }
    return {x:x, y:y};
  }

  handleScroll() {
    console.log(this.getScrollOffsets().y);
    this.updateScrollState();
    // if (this.state.updateScroll) {
      // setTimeout(() => {
      //   this.setState({
      //     updateScroll: true,
      //   })
      // }, 500); // optimize timing of scroll updates to not overload renders
    // }

    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop/3 - 60);

    // this.setState({
    //   transform: itemTranslate
    // });
    // console.log()
  }

  updateScrollState() {
    if (this.getScrollOffsets().y > 300) {
      this.setState({
        navTransformed: true,
        updateScroll: false,
      });
    } else {
      this.setState({
        navTransformed: false,
        updateScroll: false,
      });
    }
  }
}