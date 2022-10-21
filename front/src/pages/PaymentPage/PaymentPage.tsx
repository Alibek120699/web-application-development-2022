import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, SimpleGrid, Progress, Flex, Box } from "@chakra-ui/react";

import Card from "../../components/Card";
import { products } from "../../store/data";
import { PaymentForm } from "./PaymentForm";

const PaymentPage: FC = () => {
  const { query } = useParams();
  console.log("query", query);

  return (
    <Box p={10}>
      <SimpleGrid columns={2} spacing={4} mb={{ base: 6, md: 10 }}>
        <Progress borderRadius={10} isIndeterminate={false} value={100} />
        <Progress borderRadius={10} isIndeterminate={false} value={0} />
      </SimpleGrid>

      <Flex justifyContent="space-between" mb={32}>
        <PaymentForm product={products[0]} />
        <Card product={products[0]} withButton={false} />
      </Flex>
    </Box>
  );
};

export default PaymentPage;
