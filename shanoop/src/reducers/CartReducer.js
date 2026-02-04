import {CartAction} from '../actions';

const initialState = {
  cart: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  //console.log(action.type);
  switch (action.type) {
    case CartAction.types.GET_CART_ITEMS:
      return {...state, cart: action?.payload};
    case CartAction.types.SET_IS_LOADING:
      return {...state, isLoading: action?.payload};
    default:
      return state;
  }
};