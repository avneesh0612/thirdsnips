import { ClaimNFT, Header, SwitchNetwork } from "../../components";
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  useToast,
  Image,
  Link,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useAddress, useNetwork } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

const MintPage: NextPage = () => {
  const address = useAddress();
  const toast = useToast();

  const [metTheCondition, setMetTheCondition] = useState<boolean | null>(null);
  const [isWrongNetwork, setIsWrongNetwork] = useState<boolean | null>(false);

  const network = useNetwork();

  useEffect(() => {
    network?.[0].data.chain?.id !== 137
      ? setIsWrongNetwork(false)
      : setIsWrongNetwork(true);
  }, [network, isWrongNetwork, setIsWrongNetwork]);

  const [val, setVal] = useState<string>("");

  let secret = "All Hail Web3!";

  const check = () => {
    val.toLowerCase() === secret.toLowerCase()
      ? setMetTheCondition(true)
      : setMetTheCondition(false);

    val.toLowerCase() !== secret.toLowerCase() &&
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
      {metTheCondition && address && !isWrongNetwork && <SwitchNetwork />}
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

              <Text
                fontFamily="sen"
                fontWeight="400"
                textColor="gray.500"
                fontSize="lg"
              >
                not sure about how to access the secret phrase?
                <NextLink
                  href="https://github.com/avneesh0612/thirdsnips#-early-access-nft"
                  passHref
                >
                  <Link isExternal> check steps here</Link>
                </NextLink>
              </Text>

              <FormControl
                display="flex"
                fontFamily="sen"
                justifyContent="center"
                my="2"
                flexDir="column"
              >
                <Box>
                  <Input
                    placeholder="enter the secret phrase..."
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
              </FormControl>
            </>
          )}

          {metTheCondition && <ClaimNFT />}

          <Box display="flex" justifyContent="center">
            <NextLink
              href="https://opensea.io/assets/matic/0x968fae78a3fdf1c3dbfb86f00ab9590b4b145b8e/0"
              passHref
            >
              <Link isExternal>
                <Image
                  src="/assests/nft.png"
                  height="277"
                  width="500"
                  alt="NFT"
                  cursor="pointer"
                />
              </Link>
            </NextLink>
          </Box>

          <Box
            display="flex"
            flexDir="row"
            alignItems="center"
            gap="2"
            justifyContent="center"
            textAlign="center"
          >
            <Text fontFamily="sen" fontSize="xl">
              powered by
            </Text>

            <Center>
              <NextLink href="https://thirdweb.com" passHref>
                <Link isExternal>
                  <Image src="/assests/thirdweb.svg" height="20" width="48" />
                </Link>
              </NextLink>
            </Center>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MintPage;
