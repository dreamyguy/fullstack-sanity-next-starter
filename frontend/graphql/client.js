import '../env';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { config } from '../config';

const { apiSanity, fetchPolicy } = config;

export const clientGQL = new ApolloClient({
  link: new HttpLink({ uri: apiSanity }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
  defaultOptions: { query: { fetchPolicy } },
});
