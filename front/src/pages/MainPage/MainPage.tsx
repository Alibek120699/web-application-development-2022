import { FC, lazy, Suspense } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import { products } from "../../store/data";

const Header = lazy(() => import("../../components/Header"));
const Card = lazy(() => import("../../components/Card"));

const Mainpage: FC = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Box p={10}>
        <Suspense fallback={null}>
          <SimpleGrid minChildWidth="200px" gap={4}>
            {products.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </SimpleGrid>
        </Suspense>
      </Box>
    </>
  );
};

export default Mainpage;
