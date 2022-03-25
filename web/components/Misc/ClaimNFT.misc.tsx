import { FC, useState, useEffect } from "react";

import { FiCopy } from "react-icons/fi"

import {
  Box,
  Text,
  Button,
  Badge,
  useClipboard,
  useToast,
  Input,
} from "@chakra-ui/react";

import { useAddress, useMetamask, useNFTDrop } from "@thirdweb-dev/react";

const ClaimNFT: FC = () => {
  const [add, setAdd] = useState<string>("");

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const toast = useToast()

    useEffect(() => {
      address ? setAdd(address) : null;
    }, [address, setAdd, add]);

  const { onCopy } = useClipboard(add);

  const copy = () => {
    onCopy();

    toast({
      title: "Address Copied",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <>
        {address && (
          <Box
            fontFamily="sen"
            display="flex"
            justifyContent="center"
            mt="6"
            mb="4"
          >
            <Badge
              px="4"
              py="1"
              rounded="full"
              fontSize="md"
              colorScheme="green"
              display="flex"
              flexDir="row"
              alignItems="center"
              gap="2"
              justifyContent="center"
            >
              {address}

              <FiCopy cursor="pointer" onClick={copy} />
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
              <Button colorScheme="messenger">
                claim NFT
              </Button>
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
    </>
  );
};

export default ClaimNFT;
