import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  title: string;
  desc: string;
}

const Card: FC<Props> = ({ title, desc }) => {
  return (
    <Box
      py="16"
      px="12"
      w={{ base: "72", sm: "80" }}
      h="60"
      rounded="md"
      bgColor="#010101"
      textColor="white"
    >
      <Text fontSize={{ base: "lg", lg: "xl" }}>{title}</Text>

      <Text
        fontSize={{ base: "md", lg: "lg" }}
        fontFamily="sen"
        fontWeight="400"
        mt="1"
      >
        {desc}
      </Text>
    </Box>
  );
};

export default Card;
