import axios from "axios";

export const peopleChoisesReq = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products?limit=4");

  return data;
};
