import type { NextPage } from "next";

import { Box } from "@chakra-ui/react";
import { Header, Hero } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Box
        h="100vh"
        bgImage="https://www.buildspacein.xyz/section1/background_gradient.svg"
        objectFit="cover"
      >
        <Header />
        <Hero />
      </Box>
    </>
  );
};

export default Home;
