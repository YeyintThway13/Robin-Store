import axios from "axios";
import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_RELATED_PRODUCTS_FAIL,
  FETCH_RELATED_PRODUCTS_REQUEST,
  FETCH_RELATED_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_PRODUCTS_FAIL, payload: e.message });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_REQUEST });
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_PRODUCT_FAIL, payload: e.message });
  }
};

export const getRelatedProducts = (category) => async (dispatch) => {
  dispatch({ type: FETCH_RELATED_PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    dispatch({ type: FETCH_RELATED_PRODUCTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_RELATED_PRODUCTS_FAIL, payload: e.message });
  }
};
