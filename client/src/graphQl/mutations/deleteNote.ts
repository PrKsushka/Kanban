import { gql } from "@apollo/client";

export const DELETE_NOTE = gql`
  mutation deleteNote($deleteNoteId: ID) {
    deleteNote(id: $deleteNoteId)
  }
`;
