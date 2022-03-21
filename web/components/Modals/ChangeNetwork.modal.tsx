import React, { FC } from "react";
import { useSwitchNetwork } from "@3rdweb/hooks";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

interface props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const ChangeNetwork: FC<props> = ({ isOpen, onOpen, onClose }) => {
  const { switchNetwork } = useSwitchNetwork();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent fontFamily="sen">
          <ModalHeader>Change Network</ModalHeader>
          <ModalBody
            display="flex"
            flexDir="column"
            justifyContent="center"
            gap="6"
            textAlign="center"
          >
            <Box display="flex" flexDir="row" alignItems="center">
              <Image src="/assests/polygon-icon.svg" height="8" width="8" />

              <Text fontWeight="700" fontSize="lg">
                you&apos;re not connected to the polygon mumbai network
              </Text>
            </Box>

            <Box display="flex" justifyContent="center">
              <Button
                size="lg"
                color="white"
                w="64"
                _hover={{}}
                _focus={{}}
                _active={{}}
                onClick={async () => {
                  await switchNetwork(80001);
                }}
                fontWeight="bold"
                bg="linear-gradient(289.29deg, #00E3D6 -76.18%, #3788FF 116.82%)"
              >
                Switch to Polygon{" "}
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangeNetwork;
