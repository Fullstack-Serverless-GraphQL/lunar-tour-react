import gql from "graphql-tag";

export const UPDATE_FORRM_DATA = gql`
  mutation UPDATE_FORM_DATA(
    $date: String
    $email: String
    $custotmer: [CustomerInput]
  ) {
    updateFormData(date: $date, email: $email, custotmer: $custotmer)
  }
`;
