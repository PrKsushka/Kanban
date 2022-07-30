import { gql } from "@apollo/client";

export const ADD_NEW_NOTE = gql`
  mutation addNewNote($input: NoteInput) {
    addNewNote(input: $input) {
      id
      note
      status
    }
  }
`;
