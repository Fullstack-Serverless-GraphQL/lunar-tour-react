import { GET_FORM_DATA } from "./graphql/Queries";

export const resolvers = {
  Mutation: {
    updateFormData: (parent, args, context, info) => {
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
