import React, { Component } from 'react';
import arrow from '../images/down-arrow@2x.png';

export default class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu() {
    var newState = !this.state.menuOpen;
    this.setState({
      menuOpen: newState,
    });
    setTimeout(() => {
      console.log(this.state.menuOpen);
    },250);
  }

  render() {
    const displayToggle = {
      display: this.state.menuOpen ? 'inline' : 'none',
    };
    const arrowStyle = {
      color: 'black',
      height: '6px',
      opacity: '0.6',
      margin: '1px 3px',
      MsTransform: this.state.menuOpen ? 'rotate(180deg)' : 'rotate(0deg)', /* IE 9 */
      WebkitTransform: this.state.menuOpen ? 'rotate(180deg)' : 'rotate(0deg)', /* Chrome, Safari, Opera */
      transform: this.state.menuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    };
    return (
      <div className="sort-by">
        <div className="sort-by-title" onClick={this.toggleMenu.bind(this)}>{'Sort by: ' + this.props.sortBy}<img src={arrow} style={arrowStyle} /></div>
        <div style={displayToggle}>
          <div className="sort-by-menu" >
            <div className="sort-by-option" onClick={this.props.onSortSelection}>Featured</div>
            <div className="sort-by-option" onClick={this.props.onSortSelection}>Name</div>
            <div className="sort-by-option" onClick={this.props.onSortSelection}>Price - low to high</div>
            <div className="sort-by-option" onClick={this.props.onSortSelection}>Price - high to low</div>
            <div className="sort-by-option" onClick={this.props.onSortSelection}>Newest</div>
          </div>
        </div>
      </div>
    )
  }
}
