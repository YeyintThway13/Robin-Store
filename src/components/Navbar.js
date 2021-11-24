import { Flex, Text, Tag } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Flex
      bgColor="gray.400"
      p="20px 60px"
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      align="center"
      justify="space-between"
      zIndex="1000"
    >
      <Text fontSize="2xl" fontWeight="900" cursor="pointer" w="150px">
        <Link to="/">Robin Store</Link>
      </Text>
      <Flex gridGap="25px">
        <Text cursor="pointer">Home</Text>
        <Text cursor="pointer">Category</Text>
        <Link to="/cart">
          <Flex align="center" cursor="pointer">
            <BsMinecartLoaded style={{ fontSize: "22px" }} />
            <Tag ml="5px" size="sm" variant="solid" colorScheme="teal">
              {cartItems?.length}
            </Tag>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
