import { gql } from "@apollo/client";


export const GET_RICK = gql`
query RichChapters{
  characters(page: 2, filter: { name: "rick" }) {
    results {
      id
      name
      image
    }
  }
}
`;


