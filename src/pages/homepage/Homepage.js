import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import banner from "./banner.jpg";
import contact from "./contact.png";
import men from "./men.jpg";
import women from "./women.jfif";
import electronic from "./electronic.jfif";
import { useQuery } from "react-query";
import { peopleChoisesReq } from "../../apis/peopleChoisesProducts";
import HomepageCard from "../../components/HomepageCard";
import { jeweleryReq } from "../../apis/jeweleryReq";
import Loading from "../../components/Loading/Loading";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const Homepage = () => {
  const history = useHistory();

  const { data } = useQuery("peopleChoses", peopleChoisesReq, {
    staleTime: 600000,
  });

  const { data: jData } = useQuery("jewelery", jeweleryReq, {
    staleTime: 600000,
  });

  return (
    <Flex mt="110px" mb="40px" direction="column">
      {data && jData ? (
        <Flex direction="column" mx="100px">
          <ScrollToTop />
          <Flex align="center">
            <Flex direction="column" gridGap="10px">
              <Text fontSize="25px" fontWeight="900">
                Welcome from Robin Store
              </Text>
              <Text mr="200px">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.using
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to usi
              </Text>
              <Flex gridGap="20px" mt="10px">
                <Button
                  colorScheme="teal"
                  onClick={() => history.push("/products")}
                >
                  Shop Now
                </Button>
                <a href="#contact">
                  <Button variant="outline" colorScheme="teal">
                    Contact Us
                  </Button>
                </a>
              </Flex>
            </Flex>
            <Image
              src={banner}
              w="500px"
              borderRadius="20px"
              border="4px solid #111"
            />
          </Flex>

          <Flex mt="100px" direction="column">
            <Text textAlign="center" fontSize="25px" fontWeight="700">
              Top Categories
            </Text>
            <Flex mt="50px">
              <Image src={men} width="33.3%" cursor="pointer" />
              <Image src={women} width="33.3%" cursor="pointer" />
              <Image src={electronic} width="33.3%" cursor="pointer" />
            </Flex>
          </Flex>

          <Flex mt="100px" direction="column">
            <Text textAlign="center" fontSize="25px" fontWeight="700">
              People Choises
            </Text>
            <Flex mt="50px" justify="space-evenly">
              {data?.map((product) => (
                <HomepageCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  product={product}
                />
              ))}
            </Flex>
          </Flex>

          <Flex mt="100px" direction="column">
            <Text textAlign="center" fontSize="25px" fontWeight="700">
              Jewels You Can Get
            </Text>
            <Flex mt="50px" justify="space-evenly">
              {jData?.map((product) => (
                <HomepageCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  product={product}
                />
              ))}
            </Flex>
          </Flex>

          <Flex mt="100px" direction="column" id="contact">
            <Text textAlign="center" fontSize="25px" fontWeight="700">
              Keep in touch with us
            </Text>
            <Flex mt="50px" justify="space-evenly" align="center">
              <Image src={contact} w="500px" h="400px" />
              <Flex
                direction="column"
                gridGap="15px"
                boxShadow=" 2px 1px 30px -11px rgba(0,0,0,0.56)"
                padding="40px"
                borderRadius="20px"
              >
                <Text
                  fontWeight="700"
                  fontSize="20px"
                  textAlign="center"
                  mb="15px"
                >
                  Contact Form
                </Text>
                <Flex gridGap="10px">
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input />
                  </FormControl>
                </Flex>
                <FormControl>
                  <FormLabel>Your Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl>
                  <FormLabel>Your Phone Number</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children="+95" />
                    <Input type="tel" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>What do u want to suggest?</FormLabel>
                  <Textarea />
                </FormControl>
                <Button colorScheme="teal">Submit</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Loading />
      )}
    </Flex>
  );
};

export default Homepage;
