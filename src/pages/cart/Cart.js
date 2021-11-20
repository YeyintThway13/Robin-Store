import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Divider, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log({ cartItems });

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const decreseQty = (item) => {
    if (item.qty > 1) {
      dispatch(
        addToCart(item.productId, item.product, item.price, item.qty - 1)
      );
    }
  };

  // accumulator , currentValue
  // 447.92 + 200.7 = 648.62 + 15.99
  const itemsPrice = cartItems.reduce((a, c) => {
    return a + c.price * c.qty;
  }, 0);

  const discountPrice = itemsPrice > 500 ? itemsPrice * (10 / 100) : 0;

  const taxPrice = itemsPrice * (5 / 100);

  const increseQty = (item) => {
    dispatch(addToCart(item.productId, item.product, item.price, item.qty + 1));
  };

  return (
    <Flex mt="110px" mb="40px" mx="100px" direction="row" gridGap="70px">
      <Table variant="simple">
        <TableCaption>
          Thanks for shopping with us. Here is your cart!
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Quantity</Th>
            <Th>Total Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item, i) => (
            <Tr>
              <Td>
                <Image src={item.product.image} h="100px" />
              </Td>
              <Td>
                <Text>{item.product.title}</Text>
              </Td>
              <Td>
                <Flex align="center" gridGap="10px">
                  <Button onClick={() => decreseQty(item)}>-</Button>
                  <Text>{item.qty}</Text>
                  <Button onClick={() => increseQty(item)}>+</Button>
                </Flex>
              </Td>
              <Td>
                <Text>$ {(item.price * item.qty).toFixed(2)}</Text>
              </Td>
              <Td>
                <AiFillDelete
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={() => removeFromCartHandler(item.productId)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex direction="column" gridGap="20px">
        <Text fontWeight="700" fontSize="20px">
          Order Summary
        </Text>
        <Flex
          direction="column"
          width="350px"
          shadow="lg"
          p="20px"
          borderRadius="10px"
          gridGap="15px"
        >
          <Flex justify="space-between">
            <Text fontWeight="500">Items Price </Text>
            <Text fontWeight="500"> $ {itemsPrice.toFixed(2)}</Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontWeight="500">Discount Price </Text>
            <Text fontWeight="500"> $ {discountPrice.toFixed(2)}</Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontWeight="500">Tax Price </Text>
            <Text fontWeight="500"> $ {taxPrice.toFixed(2)}</Text>
          </Flex>
          <Flex justify="space-between">
            <Text fontWeight="500">Delivery Price </Text>
            <Text fontWeight="500"> $ 10</Text>
          </Flex>
          <Divider />
          <Flex justify="space-between">
            <Text fontWeight="500">Total Price </Text>
            <Text fontWeight="500">
              $ {(itemsPrice + taxPrice + 10 - discountPrice).toFixed(2)}
            </Text>
          </Flex>
        </Flex>
        <Button colorScheme="teal">Checkout Now</Button>
      </Flex>
    </Flex>
  );
};

export default Cart;

{
  /*   <Flex key={i} align="center" justify="space-between">
          <Image src={item.product.image} h="100px" />
          <Text>{item.product.title}</Text>
          <Flex align="center" gridGap="10px">
            <Button onClick={() => decreseQty(item)}>-</Button>
            <Text>{item.qty}</Text>
            <Button onClick={() => increseQty(item)}>+</Button>
          </Flex>
          <Text>Total - {item.price * item.qty}</Text>
          <AiFillDelete
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={() => removeFromCartHandler(item.productId)}
          />
        </Flex>*/
}
