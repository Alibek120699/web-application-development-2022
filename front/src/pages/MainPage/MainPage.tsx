import { FC, lazy, Suspense, useMemo, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import { products } from "../../store/data";

const Header = lazy(() => import("../../components/Header"));
const Card = lazy(() => import("../../components/Card"));

const Mainpage: FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [products, searchValue]);

  return (
    <>
      <Suspense fallback={null}>
        <Header onSearchChange={setSearchValue} />
      </Suspense>
      <Box p={10}>
        <Suspense fallback={null}>
          <SimpleGrid minChildWidth="200px" gap={4}>
            {filteredProducts.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </SimpleGrid>
        </Suspense>
      </Box>
    </>
  );
};

export default Mainpage;
