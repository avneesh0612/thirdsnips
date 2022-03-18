import { FC } from "react";

import { Box, Text, Flex } from "@chakra-ui/react";

const Header: FC = () => {
  return (
    <>
      <Box
        px="10"
        py="8"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          fontFamily="jost"
          fontSize="2xl"
          fontWeight="600"
        >
          <Text>✨third</Text>
          <Text fontWeight="400">snips</Text>
        </Box>

        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          fontFamily="sen"
          fontSize="xl"
          fontWeight="700"
          gap="8"
        >
          <Text>github.</Text>

          <Text>early access.</Text>
        </Box>
      </Box>
    </>
  );
};

export default Header;
