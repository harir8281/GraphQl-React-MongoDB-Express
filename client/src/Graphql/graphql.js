import { useQuery, gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      username
    }
  }
`;
