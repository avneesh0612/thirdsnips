import { FC } from "react";

import { Box, Text } from "@chakra-ui/react";
import Card from "./Card";

const Working: FC = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      textAlign="center"
      justifyContent="center"
      fontFamily="syncopate"
      fontWeight="700"
      fontSize="5xl"
      textColor="gray.700"
      my="4"
    >
      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        my="16"
        fontSize="3xl"
      >
        <Text>How it&nbsp;</Text>
        <Text bgGradient="linear(to-r, #7f00ff, #e100ff)" bgClip="text">
          works
        </Text>
      </Box>

      <Box
        display="flex"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
        gap="20"
      >
        <Card
          title="1. Installation"
          desc="You can install our extension through VSCode Marketplace"
        />

        <Card
          title="2. Usage"
          desc="Once installed, reload your IDE and you're good to go!"
        />
      </Box>
    </Box>
  );
};

export default Working;
