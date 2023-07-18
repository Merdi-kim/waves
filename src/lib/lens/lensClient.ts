import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client';
import {
  AUTHENTICATION,
  GET_CHALLENGE,
  GET_PROFILES,
  RECOMMENDED_PROFILES,
} from './lensQueries';

const httpLink = new HttpLink({ uri: 'https://api-mumbai.lens.dev/' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');

  operation.setContext({
    headers: {
      'x-access-token': token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export const getProfiles = (address: string) => {
  const profileQuery = GET_PROFILES(address);
  return apolloClient.query({
    query: gql(profileQuery),
  });
};

export const generateChallenge = (address: string) => apolloClient.query({
  query: gql(GET_CHALLENGE),
  variables: {
    request: {
      address,
    },
  },
});

export const recommendedProfiles = () => apolloClient.query({
  query: gql(RECOMMENDED_PROFILES),
});

export const authenticate = (address: string, signature: string) => apolloClient.mutate({
  mutation: gql(AUTHENTICATION),
  variables: {
    request: {
      address,
      signature,
    },
  },
});
