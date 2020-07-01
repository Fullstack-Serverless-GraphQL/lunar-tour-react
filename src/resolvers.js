import gql from "graphql-tag";
import { GET_FORM_DATA } from "./graphql/Queries";
export const typeDefs = gql`
  extend type Query {
    formData: FormData
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
export const resolvers = {
  Mutation: {
    updateFormData: (_, date, email, customers, { cache }) => {
      const queryResult = cache.readQuery({ query: GET_FORM_DATA });

      if (queryResult) {
        const { formData } = queryResult;
        const data = {
          formData: {
            date: date,
            email: email,
            customers: customers,
            ...formData,
          },
        };
        cache.writeQuery({ query: GET_FORM_DATA, data });
        return data.formData;
      }
      return [];
    },
  },
};
