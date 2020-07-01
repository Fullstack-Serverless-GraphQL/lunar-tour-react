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
    # email: String
    # customers: CustomerInput
  }

  extend type Mutation {
    updateFormData(
      date: String
      email: String
      customers: [CustomerInput]
    ): FormData
  }
`;
export const resolvers = {
  Mutation: {
    updateFormData: (_, args, context, info) => {
      console.log("rrr", args);
      const queryResult = context.cache.readQuery({ query: GET_FORM_DATA });
      const { formData } = queryResult;
      if (queryResult) {
        const data = {
          formData: {
            date: args.date,
            email: args.email,
            customer: args.customers,
            __typename: formData["__typename"],
          },
        };

        context.cache.writeQuery({ query: GET_FORM_DATA, data });

        return data.formData;
      }
      return [];
    },
  },
};
