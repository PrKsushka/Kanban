import { gql } from "apollo-server-express";

const noteSchema = gql`
  type Note {
    id: ID
    note: String!
    status: String!
  }
  input NoteInput {
    id: ID
    note: String!
    status: String!
  }
  type Query {
    getDataAboutNotes(type: String!): [Note]
  }
  type Mutation {
    addNewNote(input: NoteInput): Note
    deleteNote(id: ID): String
    moveNote(id: ID!, status: String!): Note
  }
`;
export default noteSchema;
