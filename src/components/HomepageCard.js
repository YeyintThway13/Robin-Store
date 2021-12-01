import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Box, Text } from "@chakra-ui/layout";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../redux/actions/cartActions";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
import { useToast } from "@chakra-ui/toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function HomepageCard({ id, image, title, price, product }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const toast = useToast();

  const addToCartHandler = () => {
    dispatch(addToCart(id, product, price, 1));
    toast({
      title: "Done add to cart",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="280px"
      p="25px"
      boxShadow="2px 1px 19px -2px rgba(0,0,0,0.56)"
      borderRadius="20px"
      gridGap="10px"
    >
      <Flex alignSelf="center" width="130px" height="150px">
        <LazyLoadImage src={image} />
      </Flex>

      <Text fontWeight="500">{title}</Text>
      <Flex direction="column">
        <Text fontWeight="900" color="green">
          $ - {price}
        </Text>
      </Flex>
      <Flex gridGap="20px">
        <Button
          colorScheme="teal"
          size="md"
          onClick={addToCartHandler}
          width="100%"
        >
          <BsFillCartFill />
        </Button>
        <Link to={`/product/${id}`} style={{ width: "100%" }}>
          <Button colorScheme="teal" size="md" width="100%">
            <IoEyeSharp />
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default HomepageCard;
