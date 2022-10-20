import { FC, MouseEvent } from "react";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { Product } from "../../store/types";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "KZT",
  maximumSignificantDigits: 1,
});

const Card: FC<Props> = ({ product }) => {
  const onPurchaseClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("purchase");
  };

  return (
    <Flex
      direction="column"
      bg="orange.100"
      p={4}
      borderRadius={4}
      cursor="pointer"
      _hover={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <Link to={`products/${product.name}`} onClick={(e) => e.preventDefault()}>
        <Image src="https://api.technodom.kz/f3/api/v1/images/272/272/258737_1.jpg" />
        <Stack gap={1}>
          <Text noOfLines={1}>{product.name}</Text>
          <Text noOfLines={1}>{product.description}</Text>
          <Text noOfLines={1}>{priceFormatter.format(product.price)}</Text>
        </Stack>
        <Button
          colorScheme="blue"
          w="full"
          zIndex={2}
          onClick={onPurchaseClick}
        >
          Purchase
        </Button>
      </Link>
    </Flex>
  );
};

export default Card;
