import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";


const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(
        {
            typePolicies: {
              Query: {
                fields: {
                    allPeople: relayStylePagination(),
                },
              },
            },
        }
    )
})

export default client;