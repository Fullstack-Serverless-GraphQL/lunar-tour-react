import gql from "graphql-tag";

export const UPDATE_FORM_DATA = gql`
  mutation UPDATE_FORM_DATA(
    $date: String
    $email: String
    $customer: CustomerInput
  ) {
    updateFormData(date: $date, email: $email, customer: $customer) @client
  }
`;
