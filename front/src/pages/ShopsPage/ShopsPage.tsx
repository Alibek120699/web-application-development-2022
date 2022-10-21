import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { FC, lazy } from "react";

const Map = lazy(() => import("../../components/Map"));
const ShopList = lazy(() => import("../../components/ShopList"));

const ShopsPage: FC = () => {
  return (
    <SimpleGrid columns={2} h="100vh">
      <ShopList />
      <Map />
    </SimpleGrid>
  );
};

export default ShopsPage;
