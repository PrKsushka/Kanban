import { gql } from "@apollo/client";

export const GET_DATA_ABOUT_NOTES = gql`
  query getDataAboutNotes($type: String!) {
    getDataAboutNotes(type: $type) {
      id
      note
      status
    }
  }
`;
