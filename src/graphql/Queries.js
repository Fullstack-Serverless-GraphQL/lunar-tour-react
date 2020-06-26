import gql from "graphql-tag";

export const HELLO_QUERY = gql`
  query HELLO_QUERY {
    hello
  }
`;

export const GET_ALL_LISTINGS = gql`
  query GetAllListings {
    getAllListings {
      listingId
      coverPhoto
      listingName
      listingLocation
      rating
      price
    }
  }
`;
