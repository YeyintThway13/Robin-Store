import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
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
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { useHistory } from "react-router";
import ScrollToTop from "../../components/ScrollToTop";
import * as yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import emailjs from "emailjs-com";
import { useToast } from "@chakra-ui/toast";

const Homepage = () => {
  const history = useHistory();

  const { data } = useQuery("peopleChoses", peopleChoisesReq, {
    staleTime: 600000,
  });

  const { data: jData } = useQuery("jewelery", jeweleryReq, {
    staleTime: 600000,
  });

  const toast = useToast();

  const contactFormSchema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Please fill valid email")
      .required("Email is required"),
    ph_no: yup
      .number()
      .required("Please fill your phone number")
      .min(5, "Phone number should be at least 5 number"),
    suggestion: yup.string().required("Suggestion is required"),
  });

  const contactForm = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      ph_no: "",
      email: "",
      suggestion: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      // values.first_name
       await emailjs.send(
        "service_r85xpaj",
        "template_qnde3ko",
        values,
        "user_NHEVvLQYnNU1QhaSt13DD"
      );
      setSubmitting(false);
      resetForm();
      toast({
        title: "Well Received your email",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  const { errors, isSubmitting, handleSubmit, getFieldProps } = contactForm;

  return (
    <Flex mt="110px" mb="40px" direction="column">
      {data && jData ? (
        <Flex direction="column" mx={{ sm: "30px", lg: "100px" }}>
          <ScrollToTop />
          <Flex
            align="center"
            justify="center"
            direction={{ base: "column", xl: "row" }}
            gridGap="20px"
          >
            <Flex
              direction="column"
              gridGap="10px"
              textAlign={{ base: "center", xl: "left" }}
            >
              <Text fontSize="25px" fontWeight="900">
                Welcome from Robin Store
              </Text>
              <Text mr={{ xl: "200px" }}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.using
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to usi
              </Text>
              <Flex
                gridGap="20px"
                mt="10px"
                justify={{ base: "center", xl: "flex-start" }}
              >
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
            <Flex
              mt="50px"
              justify="space-evenly"
              flexWrap="wrap"
              gridGap="15px"
            >
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
            <Flex
              mt="50px"
              justify="space-evenly"
              flexWrap="wrap"
              gridGap="15px"
            >
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
              <Image
                src={contact}
                w="500px"
                h="400px"
                display={{ base: "none", xl: "block" }}
              />
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

                <FormikProvider value={contactForm}>
                  <Form autoComplete="off" onSubmit={handleSubmit}>
                    <Flex direction="column" gridGap="15px">
                      <Flex gridGap="10px">
                        <FormControl>
                          <FormLabel>First Name</FormLabel>
                          <Input {...getFieldProps("first_name")} />
                          <Text fontSize="12px" color="red">
                            {errors.first_name}
                          </Text>
                        </FormControl>

                        <FormControl>
                          <FormLabel>Last Name</FormLabel>
                          <Input {...getFieldProps("last_name")} />
                          <Text fontSize="12px" color="red">
                            {errors.last_name}
                          </Text>
                        </FormControl>
                      </Flex>
                      <FormControl>
                        <FormLabel>Your Email</FormLabel>
                        <Input {...getFieldProps("email")} />
                        <Text fontSize="12px" color="red">
                          {errors.email}
                        </Text>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Your Phone Number</FormLabel>
                        <InputGroup>
                          <InputLeftAddon children="+95" />
                          <Input type="number" {...getFieldProps("ph_no")} />
                        </InputGroup>
                        <Text fontSize="12px" color="red">
                          {errors.ph_no}
                        </Text>
                      </FormControl>
                      <FormControl>
                        <FormLabel>What do u want to suggest?</FormLabel>
                        <Textarea {...getFieldProps("suggestion")} />
                        <Text fontSize="12px" color="red">
                          {errors.suggestion}
                        </Text>
                      </FormControl>
                      <Button
                        colorScheme="teal"
                        type="submit"
                        width="100%"
                        mt="15px"
                        isLoading={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Flex>
                  </Form>
                </FormikProvider>
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
