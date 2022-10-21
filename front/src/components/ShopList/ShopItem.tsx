import { FC } from "react";
import { Flex, AspectRatio, Box, Text, Image } from "@chakra-ui/react";

import { Shop } from "../../store/shops/types";
import { StarRating } from "../StarIcon";

type Props = {
  shop: Shop;
};

export const ShopItem: FC<Props> = ({ shop }) => {
  return (
    <Flex justifyContent="space-between" py={4} w="100%">
      <Box minWidth={0} mr={4}>
        <Text
          textStyle={{ base: "md", lg: "lg" }}
          fontWeight={500}
          mt={{ lg: 1 }}
          noOfLines={1}
        >
          {shop.name}
        </Text>
        <Text textStyle="xs" color="gray.700" noOfLines={1}>
          {shop.description}
        </Text>
        <Flex alignItems="center" textStyle="sm" mt={{ lg: 1 }}>
          <StarRating rating={shop.rating} />
          <Text ml={1} mr={2}>
            {shop.rating.toFixed(1)}
          </Text>
        </Flex>
      </Box>
      <AspectRatio
        minW={{ base: "80px", lg: "120px" }}
        ratio={3 / 2}
        flexShrink={0}
        borderRadius={4}
        border="1px"
        borderColor="rgba(0, 0, 0, 0.2)"
      >
        <Image src={"/vite.svg"} alt={shop.name} objectFit="cover" />
      </AspectRatio>
    </Flex>
  );
};
