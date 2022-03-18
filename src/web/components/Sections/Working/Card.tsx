import { FC } from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  desc: string;
}

const Card: FC<Props> = ({ title, desc }) => {
  return (
    <Box
      py="16"
      px="12"
      w="80"
      rounded="md"
      bgColor="#010101"
      textColor="white"
    >
      <Text fontSize="xl">{title}</Text>

      <Text fontSize="lg" fontFamily="sen" fontWeight="400" mt="1">
        {desc}
      </Text>
    </Box>
  );
};

export default Card;
