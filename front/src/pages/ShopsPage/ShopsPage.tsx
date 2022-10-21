import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { FC, lazy } from "react";

const Map = lazy(() => import("../../components/Map"));

const ShopsPage: FC = () => {
  return (
    <SimpleGrid columns={2} h="100vh">
      <Box>list</Box>
      <Map />
    </SimpleGrid>
  );
};

export default ShopsPage;
