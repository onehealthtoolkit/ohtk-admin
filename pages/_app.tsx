import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Store, StoreContext } from "lib/store";
import { ServicesContext, ServicesProvider } from "lib/services/provider";
import { client } from "lib/client";
import { ApolloProvider } from "@apollo/client";
import "i18n";

const servicesProvider = new ServicesProvider(client);
const store = new Store(servicesProvider);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ServicesContext.Provider value={servicesProvider}>
        <StoreContext.Provider value={store}>
          <Component {...pageProps} />
        </StoreContext.Provider>
      </ServicesContext.Provider>
    </ApolloProvider>
  );
}
