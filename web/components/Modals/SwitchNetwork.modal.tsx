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
import React, { FC } from "react";

const ChangeNetwork: FC = () => {
  return (
    <>
      <Modal isOpen={true} onClose={() => {}} isCentered={true}>
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
            <Box
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              gap="2"
            >
              <Image
                src="/assests/polygon-icon.svg"
                height="8"
                width="8"
                alt="polygon bhai"
              />

              <Text fontWeight="700" fontSize="lg">
                you&apos;re not connected to the polygon mumbai network
              </Text>

              <Text fontWeight="600" fontSize="lg" textColor="gray.800">
                please change network to proceed
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangeNetwork;
