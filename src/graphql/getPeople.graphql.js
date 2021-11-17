import { gql } from '@apollo/client';

const GET_PEOPLE = gql`
query allPeople($first: Int, $after: String){
  allPeople(first: $first, after: $after){
  	pageInfo {
      endCursor
      hasNextPage
    }
    edges {
        cursor
        node {
          id
          name
          gender
          homeworld {
            name
          }
          species{
            name
          }
        }
      }
  }
}
`;

export default GET_PEOPLE;