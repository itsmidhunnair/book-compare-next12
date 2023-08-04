const { ApolloClient, InMemoryCache } = require("@apollo/client");

/**
 * Establishes connection with the Apollo Server
 */
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
  cache: new InMemoryCache(),
});
