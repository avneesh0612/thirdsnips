import { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

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
        <Text>how it&nbsp;</Text>
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
        <Box py="16" px="12" rounded="md" bgColor="#010101" textColor="white">
          <Text fontSize="xl">1. installation</Text>

          <Text fontSize="lg" fontFamily="sen" fontWeight="400">
            You can install our <br />
            extension through VSCode <br />
            Marketplace
          </Text>
        </Box>

        <Box py="16" px="12" rounded="md" bgColor="#010101" textColor="white">
          <Text fontSize="xl">2. usage</Text>

          <Text fontSize="lg" fontFamily="sen" fontWeight="400">
            once installed, reload your <br />
            IDE and you&apos;re good to
            <br /> go!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Working;
