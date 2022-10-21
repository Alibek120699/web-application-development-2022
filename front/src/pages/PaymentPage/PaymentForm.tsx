import {
  Grid,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import InputMask from "react-input-mask";

import { Product } from "../../store/types";

type Props = {
  readonly product: Product;
};

type FormInputs = {
  readonly cardNumber: string;
  readonly expDateMonth: string;
  readonly expDateYear: string;
  readonly cvv: string;
  readonly name: string;
};

export const PaymentForm: FC<Props> = ({ product }) => {
  console.log("product", product);

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log("data", data);
  };

  return (
    <Box flexShrink={0}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          templateColumns={{ base: "1fr 140px" }}
          rowGap={4}
          columnGap={5}
          mt={{ base: 6, md: 12 }}
        >
          <FormControl id="paymentFormSample" isInvalid={!!errors.cardNumber}>
            <FormLabel textStyle="sm">Card Number</FormLabel>
            <Controller
              control={control}
              name="cardNumber"
              defaultValue=""
              rules={{
                required: { value: true, message: "Enter Card Number" },
              }}
              render={({ field }) => (
                <Input
                  type="text"
                  as={InputMask}
                  mask="9999 9999 9999 9999"
                  placeholder="Card number"
                  data-cp="cardNumber"
                  autoComplete="cc-number"
                  {...field}
                />
              )}
            />
            <Text noOfLines={1} textStyle="sm" color="red.700" mt={1}>
              {errors?.name?.message}
            </Text>
          </FormControl>
          <Box>
            <FormControl>
              <FormLabel>Expiration Date</FormLabel>
              <Flex alignItems="center" pos="relative">
                <Controller
                  control={control}
                  name="expDateMonth"
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Enter expiration date",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      isInvalid={!!errors.expDateMonth}
                      type="tel"
                      as={InputMask}
                      mask="99"
                      textAlign="center"
                      placeholder="MM"
                      data-cp="expDateMonth"
                      autoComplete="cc-exp-month"
                      borderRightWidth={0}
                      {...field}
                    />
                  )}
                />
                <Text
                  pos="absolute"
                  top={0}
                  right={0}
                  bottom={0}
                  left={0}
                  margin="auto"
                  textAlign="center"
                  lineHeight="40px"
                  color="gray.400"
                  pointerEvents="none"
                >
                  /
                </Text>
                <Controller
                  control={control}
                  name="expDateYear"
                  defaultValue=""
                  rules={{
                    required: {
                      value: true,
                      message: "Enter expiration date",
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      isInvalid={!!errors.expDateYear}
                      type="tel"
                      as={InputMask}
                      mask="99"
                      textAlign="center"
                      placeholder="YY"
                      data-cp="expDateYear"
                      autoComplete="cc-exp-year"
                      borderLeftWidth={0}
                      {...field}
                    />
                  )}
                />
              </Flex>
              <Text noOfLines={1} textStyle="sm" color="red.700" mt={1}>
                {errors?.expDateYear?.message}
              </Text>
            </FormControl>
          </Box>

          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Holder Name</FormLabel>
            <Input
              {...register("name", {
                required: { value: true, message: "Enter Holder Name" },
              })}
              placeholder="Holder Name"
              data-cp="name"
              autoComplete="cc-name"
            />
            <Text textStyle="sm" color="red.700" mt={1}>
              {errors?.name?.message}
            </Text>
          </FormControl>

          <FormControl isInvalid={!!errors.cvv}>
            <FormLabel>CVC</FormLabel>
            <Controller
              control={control}
              name="cvv"
              defaultValue=""
              rules={{
                required: { value: true, message: "Enter CVC" },
              }}
              render={({ field }) => (
                <Input
                  type="tel"
                  as={InputMask}
                  mask="999"
                  placeholder="CVC"
                  data-cp="cvv"
                  autoComplete="cc-csc"
                  {...field}
                />
              )}
            />
            <Text textStyle="sm" color="red.700" mt={1}>
              {errors?.cvv?.message}
            </Text>
          </FormControl>
          <Button
            type="submit"
            fontWeight="bold"
            colorScheme="blue"
            mt={2}
            w="100%"
            gridColumn="1/3"
          >
            Pay
          </Button>
        </Grid>
      </form>
    </Box>
  );
};
