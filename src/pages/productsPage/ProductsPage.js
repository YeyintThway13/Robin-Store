import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useQuery } from "react-query";
import { getAllProductsRequest } from "../../apis/getAllProducts";
import MySkeleton from "../../components/MySkeleton";
import ProductCard from "../../components/ProductCard";

const ProductsPage = () => {
  const { isLoading, data } = useQuery(
    "getAllProducts",
    getAllProductsRequest,
    { staleTime: 600000 }
  );

  return (
    <Flex
      flexWrap="wrap"
      justify="center"
      gridGap="20px"
      mt="110px"
      mb="40px"
      mx="100px"
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => <MySkeleton key={i} />)}
      {data?.length > 0 &&
        data.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            product={product}
          />
        ))}
    </Flex>
  );
};

export default ProductsPage;
