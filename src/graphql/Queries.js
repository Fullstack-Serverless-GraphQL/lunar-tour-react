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

export const GET_A_LISTING = gql`
  query GetAListing($listingId: String!) {
    getAListing(listingId: $listingId) {
      coverPhoto
      listingId
      listingName
      listingType {
        name
      }
      listingLocation
      listingActivities {
        name
      }
      listingDescription
      price
      numberOfDays
      guide {
        Bio
        Name
        Avatar
      }
      specialType
    }
  }
`;

export const GET_FORM_DATA = gql`
  query GET_FORM_DATA {
    formData @client {
      date
      email
      customer {
        name
        surname
        country
        passportNumber
        physioScore
      }
    }
  }
`;
