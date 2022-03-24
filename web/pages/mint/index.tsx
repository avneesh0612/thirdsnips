import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Box, Text, Button, Badge } from "@chakra-ui/react";
import type { modes } from "../../@types/types";

import { Header } from "../../components";
import { supabase } from "../../utils/supabaseClient";

import {
  useAddress,
  useMetamask,
  useNFTDrop,
  useNFTCollection,
} from "@thirdweb-dev/react";

const MintPage: NextPage = () => {
  const [env, setEnv] = useState<modes>();
  const connectWithMetamask = useMetamask()
  const address = useAddress()

  const nftDrop = useNFTDrop("0x1d5c1C13613FEa5C244486A824ABE4BD43BF27Ef");

  useEffect(() => {
    process.env.NODE_ENV === "development"
      ? setEnv("development")
      : process.env.NODE_ENV === "production"
      ? setEnv("production")
      : setEnv("test");
  }, [env, setEnv]);

  const loginWithGithub = async () => {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        redirectTo:
          env === "development"
            ? "https://3000-kranurag-thirdwebsnippet-rf24ngqle54.ws-us38.gitpod.io/mint"
            : "https://www.thirdsnips.live/mint",
      }
    );
  };

  const user = supabase.auth.user();

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
          <Text>cliam your early access NFT</Text>

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
                <Button colorScheme="messenger" onClick={()=>nftDrop?.claim(1)}>claim NFT</Button>
              </>
            ) : (
              <Button
                onClick={() => connectWithMetamask()}
                colorScheme="messenger"
              >
                connect wallet
              </Button>
            )}

            {user ? (
              <Text
                fontSize="xl"
                display="flex"
                flexDir="row"
                gap="1"
                alignItems="center"
              >
                hello,
                <Text color="gray.800">{user.user_metadata.full_name}</Text>
              </Text>
            ) : (
              <Button onClick={loginWithGithub} colorScheme="messenger">
                login with github
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MintPage;
