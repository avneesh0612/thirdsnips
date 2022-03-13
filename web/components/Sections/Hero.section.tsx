import { FC } from "react";

import { Box, Text, Button } from "@chakra-ui/react";
import Typed from "react-typed";
import { BsArrowRightShort } from "react-icons/bs";

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
        mt="16"
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

        <Text
          fontFamily="sen"
          fontSize="xl"
          textColor="gray.500"
          fontWeight="400"
        >
          all the code snippets from thirdweb portal, packed in an vscode
          extension
        </Text>

        <Box>
          <Button
            fontFamily="jost"
            marginTop="12"
            fontSize="2xl"
            bgColor="#010101"
            textColor="white"
            transition="all"
            shadow="xl"
            p="6"
            _focus={{
              backgroundColor: "#010101",
            }}
            _hover={{
              backgroundColor: "#010101",
              marginLeft: "4",
              transitionDuration: "100ms",
            }}
          >
            get started
            <BsArrowRightShort size="25" />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
