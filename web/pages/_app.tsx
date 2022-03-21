import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";
import theme from "../styles/theme";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";

import "@fontsource/syncopate/400.css";
import "@fontsource/syncopate/700.css";

import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {

  const supportedChainIds = [80001];

  const connectors = {
    injected: {},
  };


  return (
    <ThirdwebWeb3Provider connectors={connectors} supportedChainIds={supportedChainIds}>
      <ChakraProvider theme={theme}>
        <NextSeo
          title="ThirdSnips"
          titleTemplate="ThirdSnips"
          defaultTitle="ThirdSnips"
          description="Stop writing thirdweb snippets! Use thirdsnips to make it all snap. All the code snippets from thirdweb portal, packed in an vscode extension."
          canonical="https://www.avneesh.tech/"
          openGraph={{
            url: "https://www.avneesh.tech/",
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
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
