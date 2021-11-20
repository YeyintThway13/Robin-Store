import { Flex } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MySkeleton from "../../components/MySkeleton";
import ProductCard from "../../components/ProductCard";
import { getAllProducts } from "../../redux/actions/productActions";

const Homepage = () => {
  const { loading, products, error } = useSelector((state) => state.products);

  // const result = products.filter((product) => product.id === 3);
  // console.log(result[0]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Flex
      flexWrap="wrap"
      justify="center"
      gridGap="20px"
      mt="110px"
      mb="40px"
      mx="100px"
    >
      {loading &&
        [0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => <MySkeleton key={i} />)}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </Flex>
  );
};

export default Homepage;
