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
      const queryResult = context.cache.readQuery({ query: GET_FORM_DATA });

      console.log(
        "rrr",
        _,
        args,

        queryResult.formData["__typename"]
      );
      const { formData } = queryResult;
      if (queryResult) {
        const data = {
          formData: {
            date: args.date,
            __typename: queryResult.formData["__typename"],
          },
        };
        console.log("rrr-3", data);

        context.cache.writeQuery({ query: GET_FORM_DATA, data });
        console.log("rrr-2", data);

        return data.formData;
      }
      return [];
    },
  },
};
