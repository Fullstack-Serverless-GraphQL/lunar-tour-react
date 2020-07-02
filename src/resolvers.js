import _ from "lodash";
import { GET_FORM_DATA } from "./graphql/Queries";

export const resolvers = {
  Mutation: {
    updateFormData: (parent, args, context, info) => {
      console.log("rrr", args);
      const queryResult = context.cache.readQuery({ query: GET_FORM_DATA });
      const { formData } = queryResult;
      if (queryResult) {
        if (!_.isUndefined(formData.date) && !_.isUndefined(formData.email)) {
          const data = {
            formData: {
              date: formData.date,
              email: formData.email,
              customer: args.customers,
              __typename: formData["__typename"],
            },
          };

          context.cache.writeQuery({ query: GET_FORM_DATA, data });
          return data.formData;
        } else {
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
      }
      return [];
    },
  },
};
