import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Box, Text, Link } from "@chakra-ui/layout";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../redux/actions/cartActions";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";
import { useToast } from "@chakra-ui/toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({ id, image, title, price, product }) => {
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

  // const goDetailsHandler = () => {
  //   history.push(`/product/${id}`);
  // };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="280px"
      p="25px"
      border="3px solid #111"
      borderRadius="20px"
      gridGap="10px"
    >
      <Flex alignSelf="center" width="130px" height="150px">
        <LazyLoadImage src={image} />
      </Flex>

      <Text fontWeight="500">{title}</Text>
      <Flex direction="column">
        <Text>$ - {price}</Text>
        <Box display="flex" mt="2" alignItems="center">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <AiFillStar key={i} style={{ color: "gold" }} />
          ))}
        </Box>
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
        <Link href={`/product/${id}`} width="100%">
          <Button colorScheme="teal" size="md" width="100%">
            <IoEyeSharp />
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default ProductCard;
