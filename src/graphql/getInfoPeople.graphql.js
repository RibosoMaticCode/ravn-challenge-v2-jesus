import { gql } from '@apollo/client';

const GET_INFOPEOPLE = gql`
query person($id: ID!){
    person(id: $id) {
      name
      gender
      homeworld {
        name
      }
      eyeColor
      hairColor
      skinColor
      birthYear
    }
}
`;

export default GET_INFOPEOPLE;