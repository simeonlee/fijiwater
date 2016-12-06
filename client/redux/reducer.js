// Default state for reducer as called in 'mapReducer()'
const initialState = {
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
  cart: [],
  cartVisible: false,
}

export function selectAFilter(range) {
  return {
    type: 'SELECT_A_FILTER',
    range,
  }
}

export function clearAllFilters() {
  return {
    type: 'CLEAR_ALL_FILTERS',
  }
}

export function toggleProductInCart(productId) {
  return {
    type: 'TOGGLE_PRODUCT_IN_CART',
    productId,
  }
}

export function displayCart() {
  return {
    type: 'DISPLAY_CART',
  }
}

export function hideCart() {
  return {
    type: 'HIDE_CART',
  }
}

export function toggleCartVisibility() {
  return {
    type: 'TOGGLE_CART_VISIBILITY',
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case 'CLEAR_ALL_FILTERS': {
      return {
        ...state,
        filterOn: true,
        filterPriceRange: {
          min: parseInt(action.range[0]),
          max: action.range[1] === '+' ? action.range[1] : parseInt(action.range[1]),
        }
      }
    }

    case 'SELECT_A_FILTER': {
      return {
        ...state,
        filterOn: false,
        filterPriceRange: {
          min: 0,
          max: '+',
        },
      }
    }

    case 'TOGGLE_PRODUCT_IN_CART': {
      var id = action.productId
      var cart = state.cart;
      if (cart.indexOf(id) > -1) {
        cart.splice(cart.indexOf(id), 1);
      } else {
        cart.push(id);
      }
      return {
        ...state,
        cart: cart,
      }
    }

    case 'DISPLAY_CART': {
      return {
        ...state,
        cartVisible: true,
      }
    }

    case 'HIDE_CART': {
      return {
        ...state,
        cartVisible: false,
      }
    }

    case 'TOGGLE_CART_VISIBILITY': {
      return {
        ...state,
        cartVisible: !state.cartVisible,
      }
    }

    default: return state
  }
}