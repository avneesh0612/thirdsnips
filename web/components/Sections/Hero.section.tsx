import { FC } from "react";

import { Box, Text, Button, Image } from "@chakra-ui/react";
import Typed from "react-typed";

const Hero: FC = () => {
  return (
    <>
      <Box
        display="flex"
        flexDir="column"
        textAlign="center"
        justifyContent="center"
        fontFamily="syncopate"
        fontWeight="700"
        fontSize="5xl"
        textColor="gray.700"
        my="16"
      >
        <Typed
          strings={["stop writing thirdweb snippets"]}
          typeSpeed={40}
          loop={false}
        />

        <Text textColor="gray.600">
          <Typed
            strings={["use thirdsnips to make it all snap!"]}
            typeSpeed={40}
            loop={false}
          />
        </Text>

        <Box>
          <Button
            fontFamily="jost"
            marginTop="12"
            fontSize="2xl"
            bgColor="#010101"
            textColor="white"
            transition="all"
            p="6"
            _focus={{
              backgroundColor: "#010101",
            }}
            _hover={{
              backgroundColor: "#010101",
              marginTop: "14",
              transitionDuration: "100ms",
            }}
          >
            get started
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
