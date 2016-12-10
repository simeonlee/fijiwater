import React from 'react';

// This is the component that shows the price filters, delivered through props
const PriceFilter = props => {
  const title = props.filterOn 
    ? <div className="filter-title">Price<span className="filter-clear highlight" onClick={props.onFilterClear}>Clear</span></div>
    : <div className="filter-title">Price<span className="filter-clear" onClick={props.onFilterClear}>Clear</span></div>
  var filterSelections = props.filters.map((filter, i) => {
    return (
      <div
        className={'filter-selection ' + filter.min + ' ' + filter.max + ((props.range.min === filter.min) && (props.range.max === filter.max) ? ' highlight' : '')}
        onClick={props.onFilterSelection}
        key={i}
      >{filter.text}</div>
    )
  })
  return (
    <div className="price-filter">
      {title}
      {filterSelections}
    </div>
  )
}

export default PriceFilter;