import theme from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";
import "@fontsource/syncopate/400.css";
import "@fontsource/syncopate/700.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { SupportedChain } from "@thirdweb-dev/react/dist/constants/chain";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const desiredChainId = 137;
  const supportedChains = [137] as SupportedChain[];

  return (
    <ThirdwebProvider
      desiredChainId={desiredChainId}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_OPENZEPPLIN_URL!,
          },
        },
      }}
    >
      <ChakraProvider theme={theme}>
        <NextSeo
          title="Thirdsnips"
          titleTemplate="Thirdsnips"
          defaultTitle="Thirdsnips"
          description="Stop writing thirdweb snippets! Use thirdsnips to make it all snap. All the code snippets from thirdweb portal, packed in an VSCode extension."
          canonical="https://www.thirdsnips.live/"
          openGraph={{
            url: "https://www.thirdsnips.live/",
            title: "Thirdsnips",
            description:
              "Stop writing thirdweb snippets! Use thirdsnips to make it all snap. All the code snippets from thirdweb portal, packed in an VSCode extension.",
            images: [
              {
                url: "https://res.cloudinary.com/didkcszrq/image/upload/v1648392505/OG_image_p6027z.png",
                width: 1475,
                height: 786,
                alt: "Thirdsnips",
              },
            ],
          }}
          twitter={{
            handle: "@avneesh0612",
            site: "@avneesh0612",
            cardType: "summary_large_image",
          }}
        />
        <Head>
          <link rel="icon" type="image/svg" href="/assests/logo.svg" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
