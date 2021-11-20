import {
  ADD_TO_CART,
  CART_EMPTY,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existedItem = state.cartItems.find(
        (x) => x.productId === item.productId
      );
      if (existedItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productId === item.productId ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.productId !== action.payload.productId
        ),
      };

    case CART_EMPTY:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
