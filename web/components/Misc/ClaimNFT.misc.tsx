import {
  Badge,
  Box,
  Button,
  Spinner,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { useAddress, useEditionDrop, useMetamask } from "@thirdweb-dev/react";
import { FC, useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";

const ClaimNFT: FC = () => {
  const [add, setAdd] = useState<string>("");
  const editionDrop = useEditionDrop(
    "0x968fAE78A3FdF1C3DBfb86F00Ab9590b4B145b8e"
  );
  const [loading, setLoading] = useState<boolean>(false);

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const toast = useToast();

  useEffect(() => {
    address ? setAdd(address) : null;
  }, [address, setAdd, add]);

  const { onCopy } = useClipboard(add);

  const claimNFT = async () => {
    setLoading(true);
    editionDrop
      ?.claimTo(address!, 0, 1)
      .then(() => {
        toast({
          title: "NFT Claimed!",
          description: "You have claimed your NFT!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      })
      .catch(err => {
        toast({
          title: "NFT Claim Failed!",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      });
  };

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
            <Button onClick={claimNFT} colorScheme="messenger">
              {loading ? (
                <Spinner size="sm" />
              ) : (
                <Text as="span">Claim NFT</Text>
              )}
            </Button>
          </>
        ) : (
          <Button onClick={() => connectWithMetamask()} colorScheme="messenger">
            Connect Wallet
          </Button>
        )}
      </Box>
    </>
  );
};

export default ClaimNFT;
