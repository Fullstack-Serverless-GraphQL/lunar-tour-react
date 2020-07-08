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

export const MAKE_A_BOOKING = gql`
  mutation MAKE_A_BOOKING(
    $customerEmail: String
    $bookingDate: String
    $listingId: String
    $customers: [CustomerInput]
  ) {
    makeABooking(
      customerEmail: $customerEmail
      bookingDate: $bookingDate
      listingId: $listingId
      customers: $customers
    ) {
      bookingId
      listingId
      bookingDate
      size
      bookingTotal
      customerEmail
      customers {
        name
        surname
        country
        passportNumber
        physioScore
      }
      chargeReciept
    }
  }
`;
