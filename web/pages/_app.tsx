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
  const desiredChainId = 80001;
  const supportedChains = [80001] as SupportedChain[];

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
          title="ThirdSnips"
          titleTemplate="ThirdSnips"
          defaultTitle="ThirdSnips"
          description="Stop writing thirdweb snippets! Use thirdsnips to make it all snap. All the code snippets from thirdweb portal, packed in an vscode extension."
          canonical="https://www.thirdsnips.live/"
          openGraph={{
            url: "https://www.thirdsnips.live/",
            title: "ThirdSnips",
            description:
              "Stop writing thirdweb snippets! Use thirdsnips to make it all snap. All the code snippets from thirdweb portal, packed in an vscode extension.",
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
