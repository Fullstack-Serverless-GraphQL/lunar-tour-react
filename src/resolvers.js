import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Query {
    getFormData: FormData
  }

  extend type Customer {
    name: String
    surname: String
    country: String
    passportNumber: String
    physioScore: String
  }

  input CustomerInput {
    name: String
    surname: String
    country: String
    passportNumber: String
    physioScore: String
  }

  extend type FormData {
    date: String
    email: String
    customers: CustomerInput
  }

  extend type Mutation {
    updateFormData(
      date: String
      email: String
      customers: CustomerInput
    ): FormData
  }
`;
export const resolvers = {};
