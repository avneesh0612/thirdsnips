import { Header, ClaimNFT, SwitchNetwork } from "../../components";
import { Box, Text, Button, Input, useToast } from "@chakra-ui/react";
import { useAddress, useNetwork } from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
import type { NextPage } from "next";
import React, { useState, useEffect } from "react";

const MintPage: NextPage = () => {
  const address = useAddress();
  const toast = useToast();

  const [metTheCondition, setMetTheCondition] = useState<boolean | null>(null);
  const [isWrongNetwork, setIsWrongNetwork] = useState<boolean | null>(null);
  console.log(isWrongNetwork);

  const network = useNetwork();

  useEffect(() => {
    network?.[0].data.chain?.id === 80001
      ? setIsWrongNetwork(false)
      : setIsWrongNetwork(true);
  }, [network, isWrongNetwork, setIsWrongNetwork]);

  const [val, setVal] = useState<string>("");

  let secret = "All Hail Web3!";

  const check = () => {
    val.toLowerCase() === secret.toLowerCase()
      ? setMetTheCondition(true)
      : setMetTheCondition(false);

    metTheCondition === false &&
      toast({
        title: "Wrong Guess o_O",
        description: "Please refer to the extension for the correct secret",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
  };

  return (
    <>
      {metTheCondition && !isWrongNetwork && <SwitchNetwork />}
      <Box
        h="100vh"
        w="100vw"
        fontFamily="sen"
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

          {metTheCondition && address ? (
            <Text
              fontFamily="sen"
              fontWeight="400"
              textColor="gray.600"
              fontSize="xl"
            >
              wallet connected! claim your early access NFT
            </Text>
          ) : metTheCondition ? (
            <Text
              fontFamily="sen"
              fontWeight="400"
              textColor="gray.600"
              fontSize="xl"
            >
              please connect your wallet to continue
            </Text>
          ) : null}

          {!metTheCondition && (
            <>
              <Text
                fontFamily="sen"
                fontWeight="400"
                textColor="gray.600"
                fontSize="xl"
              >
                please enter the secret phrase to proceed to the next step
              </Text>

              <Box
                display="flex"
                fontFamily="sen"
                justifyContent="center"
                my="4"
                flexDir="column"
              >
                <Box>
                  <Input
                    placeholder="enter the secret phrase uwu..."
                    w="96"
                    bgColor="gray.100"
                    textColor="gray.700"
                    _placeholder={{ textColor: "gray.500" }}
                    onChange={e => setVal(e.target.value)}
                  />
                </Box>
                <Box>
                  <Button colorScheme="messenger" onClick={check}>
                    check
                  </Button>
                </Box>
              </Box>
            </>
          )}

          {metTheCondition && <ClaimNFT />}
        </Box>
      </Box>
    </>
  );
};

export default MintPage;
