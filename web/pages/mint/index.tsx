import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Box, Text, Button, Badge } from "@chakra-ui/react";
import type { modes } from "../../@types/types";

import { Header } from "../../components";

import {
  useAddress,
  useMetamask,
  useNFTDrop,
} from "@thirdweb-dev/react";

const MintPage: NextPage = () => {
  const [env, setEnv] = useState<modes>();
  const connectWithMetamask = useMetamask()
  const address = useAddress()

  const nftDrop = useNFTDrop("0x968fAE78A3FdF1C3DBfb86F00Ab9590b4B145b8e");

  useEffect(() => {
    process.env.NODE_ENV === "development"
      ? setEnv("development")
      : process.env.NODE_ENV === "production"
      ? setEnv("production")
      : setEnv("test");
  }, [env, setEnv]);

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

        <Box
          display="flex"
          flexDir="column"
          textAlign="center"
          justifyContent="center"
          fontFamily="syncopate"
          fontWeight="700"
          fontSize={{ base: "3xl", lg: "5xl" }}
          textColor="gray.700"
          mt="16"
        >
          <Text>claim your early access NFT</Text>

          {address ? (
            <Text
              fontFamily="sen"
              fontWeight="400"
              textColor="gray.600"
              fontSize="xl"
            >
              wallet connected! claim your early access NFT
            </Text>
          ) : (
            <Text
              fontFamily="sen"
              fontWeight="400"
              textColor="gray.600"
              fontSize="xl"
            >
              please connect your wallet to continue
            </Text>
          )}

          {address && (
            <Box fontFamily="sen">
              <Badge
                px="4"
                py="1"
                rounded="full"
                fontSize="md"
                colorScheme="green"
              >
                {address}
              </Badge>
            </Box>
          )}

          <Box
            fontFamily="sen"
            my="4"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="4"
          >
            {address ? (
              <>
                <Button colorScheme="messenger" onClick={()=>nftDrop?.claim(0)}>claim NFT</Button>
              </>
            ) : (
              <Button
                onClick={() => connectWithMetamask()}
                colorScheme="messenger"
              >
                connect wallet
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MintPage;
