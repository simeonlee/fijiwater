import React from 'react';

const PriceFilter = props => {
  const title = props.filterOn 
    ? <div className="filter-title">Price<span className="filter-clear highlight" onClick={props.onFilterClear}>Clear</span></div>
    : <div className="filter-title">Price<span className="filter-clear" onClick={props.onFilterClear}>Clear</span></div>
  var filters = [
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
  ]
  var filterSelections = filters.map((filter, i) => {
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