import { FC } from "react";

import { Box, Text, Link } from "@chakra-ui/react";

interface props {
  onHomepage: boolean;
}

const Header: FC<props> = ({ onHomepage }) => {
  return (
    <>
      <Box
        px={{ base: "1", sm: "2", md: "4", lg: "6", xl: "10" }}
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
          fontSize={{ base: "xl", lg: "2xl" }}
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
          gap={{ base: "2", md: "4", lg: "8" }}
        >
          <Link href="https://scam.com">github.</Link>
          {onHomepage ? (
            <Link href="/mint">early access.</Link>
          ) : (
            <Link href="/">home.</Link>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
