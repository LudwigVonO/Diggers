import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink
  } from '@apollo/client'
  const cache = new InMemoryCache()
  const link = new HttpLink({
  uri: 'http://localhost:8080/graphql',
  })
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
  })
  export default client;