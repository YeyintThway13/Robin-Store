import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { cartEmpty } from "../redux/actions/cartActions";

const CheckoutModal = ({ onClose, isOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const dispatch = useDispatch();

  const goShoppingHandler = () => {
    onClose();
    dispatch(cartEmpty());
    history.push("/");
  };

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex direction="column" align="center" px="15px" py="30px">
            <AiOutlineCheckCircle
              style={{ fontSize: "70px", color: "#f24d92" }}
            />
            <Text fontSize="20px" mt="10px" fontWeight="900" color="#f24d92">
              Order Successful
            </Text>
            <Text opacity="0.7" mt="5px">
              Thanks for shopping with us
            </Text>
            <Button
              mt="20px"
              colorScheme="teal"
              size="sm"
              onClick={goShoppingHandler}
            >
              Go Shopping
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
