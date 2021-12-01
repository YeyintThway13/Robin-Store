import { IconButton } from "@chakra-ui/button";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  return (
    <IconButton
      position="fixed"
      bottom="30px"
      right="40px"
      colorScheme="teal"
      aria-label="Call Segun"
      size="lg"
      onClick={() => window.scrollTo(0, 0)}
      icon={<BsFillArrowUpCircleFill />}
    />
  );
};

export default ScrollToTop;
