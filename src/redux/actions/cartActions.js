import {
  ADD_TO_CART,
  CART_EMPTY,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const addToCart =
  (productId, product, price, qty) => async (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { productId, product, price, qty },
    });
    localStorage.setItem(
      "robinCart",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART, payload: { productId } });
  localStorage.setItem("robinCart", JSON.stringify(getState().cart.cartItems));
};

export const cartEmpty = () => async (dispatch, getState) => {
  dispatch({ type: CART_EMPTY });
  localStorage.setItem("robinCart", JSON.stringify(getState().cart.cartItems));
};
