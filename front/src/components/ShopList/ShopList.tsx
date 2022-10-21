import { Box, Skeleton, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

import { useShopList } from "../../store/shops/hooks";
import { ShopItem } from "./ShopItem";

const ShopList: FC = () => {
  const { shops, isLoading } = useShopList();

  return (
    <Box
      p={5}
      overflow="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#B4BDC7",
          borderRadius: "24px",
        },
      }}
    >
      <Text fontSize="24px" fontWeight="bold" mb={4}>
        Shop List
      </Text>
      {shops.map((shop) => (
        <ShopItem key={shop.id} shop={shop} />
      ))}
      {isLoading && (
        <Stack gap={4}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Skeleton key={index} h={20} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ShopList;
