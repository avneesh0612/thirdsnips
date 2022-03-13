import type { NextPage } from "next";

import { Box } from "@chakra-ui/react";
import { Header, Hero, Working } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Box
        h="100vh"
        w="100vw"
        overflowX="hidden"
        bgImage="https://www.buildspacein.xyz/section1/background_gradient.svg"
        backgroundSize="cover"
      >
        <Header />
        <Hero />
        <Working />
      </Box>
    </>
  );
};

export default Home;
