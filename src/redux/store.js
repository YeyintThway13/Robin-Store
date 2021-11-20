import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initialState = {
  cart: {
    cartItems: localStorage.getItem("robinCart")
      ? JSON.parse(localStorage.getItem("robinCart"))
      : [],
  },
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
