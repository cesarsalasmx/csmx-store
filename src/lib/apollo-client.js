import { ApolloClient, InMemoryCache } from "@apollo/client";

// URL del endpoint GraphQL de WordPress
const WP_GRAPHQL_URL = "https://cesarsalas.mx/store/graphql";

const client = new ApolloClient({
  uri: WP_GRAPHQL_URL,
  cache: new InMemoryCache(), // Configuración de caché predeterminada
});

export default client;
