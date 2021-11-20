import { combineReducers } from "redux";
import { cartReducers } from "./reducers/cartReducers";
import {
  productReducers,
  productsReducers,
  relatedProductReducers,
} from "./reducers/productReducers";

export default combineReducers({
  products: productsReducers,
  product: productReducers,
  relatedProducts: relatedProductReducers,
  cart: cartReducers,
});
