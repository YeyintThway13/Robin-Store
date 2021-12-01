import { Flex } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProductsRequest } from "../../apis/getAllProducts";
import MySkeleton from "../../components/MySkeleton";
import ProductCard from "../../components/ProductCard";
import { getAllProducts } from "../../redux/actions/productActions";

const ProductsPage = () => {
  const { isLoading, error, data } = useQuery(
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
