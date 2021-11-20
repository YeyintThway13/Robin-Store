import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Box, Text, Link } from "@chakra-ui/layout";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ id, image, title, price }) => {
  return (
    <Link
      href={`/product/${id}`}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width="280px"
      p="25px"
      border="3px solid #111"
      borderRadius="20px"
      gridGap="10px"
    >
      <Image src={image} width="130px" height="150px" alignSelf="center" />
      <Text fontWeight="500">{title}</Text>
      <Flex direction="column">
        <Text>$ - {price}</Text>
        <Box display="flex" mt="2" alignItems="center">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <AiFillStar key={i} style={{ color: "gold" }} />
          ))}
        </Box>
      </Flex>
      <Button colorScheme="teal" size="md">
        Add to cart
      </Button>
    </Link>
  );
};

export default ProductCard;
