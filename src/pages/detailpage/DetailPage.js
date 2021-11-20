import { Image } from "@chakra-ui/image";
import { Flex, Text, Button, Divider } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/tag";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  getRelatedProducts,
  getSingleProduct,
} from "../../redux/actions/productActions";
import { AiFillHeart } from "react-icons/ai";
import { addToCart } from "../../redux/actions/cartActions";
import ProductCard from "../../components/ProductCard";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, product, error } = useSelector((state) => state.product);
  const { products } = useSelector((state) => state.relatedProducts);

  useEffect(() => {
    if (!product.category) {
      dispatch(getSingleProduct(id));
    }

    if (product.category) {
      dispatch(getRelatedProducts(product.category));
    }
  }, [product.category]);

  const addToCartHandler = () => {
    dispatch(addToCart(product.id, product, product.price, 1));
    history.push("/cart");
  };

  return (
    <Flex mt="110px" mb="40px" mx="120px">
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <Flex direction="column" width="100%" gridGap="30px">
          {/* Product Details */}
          <Flex justify="space-evenly" width="100%">
            <Image src={product.image} width="300px" />
            <Flex direction="column" gridGap="15px" width="400px" mt="50px">
              <Flex align="center" gridGap="15px">
                <Tag size="md" variant="outline">
                  Category - {product.category}
                </Tag>
                <AiFillHeart
                  style={{ fontSize: "22px", color: "red", cursor: "pointer" }}
                />
              </Flex>

              <Text fontSize="20px" fontWeight="700">
                {product.title}
              </Text>
              <Text fontSize="16px" fontWeight="500">
                $ {product.price}
              </Text>
              <Text fontSize="16px">{product.description}</Text>
              <Flex gridGap="20px">
                <Button colorScheme="teal" onClick={addToCartHandler}>
                  Add To Cart
                </Button>
                <Button colorScheme="teal" variant="outline">
                  Buy Now
                </Button>
              </Flex>
            </Flex>
          </Flex>

          <Divider />
          {/* Related Products */}
          <Text fontSize="20px" fontWeight="700">
            Related Products
          </Text>
          <Flex
            flexWrap="wrap"
            justify="center"
            gridGap="20px"
            mb="40px"
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default DetailPage;