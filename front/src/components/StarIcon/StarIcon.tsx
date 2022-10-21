import { Flex } from "@chakra-ui/react";

import { StarIconEmpty, StarIcon } from "../icons/Star";

type Props = {
  rating: number;
  color?: string;
};

export function StarRating(props: Props): JSX.Element {
  const { rating, color = "yellow.500" } = props;

  return (
    <Flex display="inline-flex" position="relative">
      {[...Array(5)].map((_, i) => (
        <StarIconEmpty key={i} color={color} w={6} h={6} />
      ))}

      <Flex
        display="inline-flex"
        alignItems="center"
        overflow="hidden"
        width={`${rating * 20}%`}
        position="absolute"
        top={0}
      >
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} color={color} w={6} h={6} />
        ))}
      </Flex>
    </Flex>
  );
}
