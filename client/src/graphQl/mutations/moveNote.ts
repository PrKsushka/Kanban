import { gql } from "@apollo/client";

export const MOVE_NOTE = gql`
  mutation moveNote($moveNoteId: ID!, $status: String!) {
    moveNote(id: $moveNoteId, status: $status) {
      id
      note
      status
    }
  }
`;
