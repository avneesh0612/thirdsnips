import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const Header: FC = () => {
  const router = useRouter();

  return (
    <>
      <Box
        px={{ base: "2", sm: "4", md: "6", lg: "8", xl: "10" }}
        py="8"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDir="row"
          gap="2"
          alignItems="center"
          fontFamily="jost"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="600"
        >
          <Image
            alt="Thirdsnips"
            src="/assests/logo.svg"
            height="30"
            width="30"
          />

          <Box display="flex" flexDir="row" alignItems="center">
            <Text>third</Text>
            <Text fontWeight="400">snips</Text>
          </Box>
        </Box>

        <Box
          fontFamily="sen"
          display="flex"
          flexDir="row"
          alignItems="center"
          gap="4"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="700"
        >
          <a
            href="https://github.com/avneesh0612/thirdsnips"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github.
          </a>

          {router.pathname === "/" ? (
            <Link href="/mint">Early Access.</Link>
          ) : (
            <Link href="/">Home.</Link>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
