import axios from "axios";

export const getAllProductsRequest = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");

  return data;
};
