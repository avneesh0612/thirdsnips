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
        bgImage="https://res.cloudinary.com/didkcszrq/image/upload/v1647222804/background_gradient_mwbieb.svg"
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
