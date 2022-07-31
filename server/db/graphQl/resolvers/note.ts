import Notes from "../../models/note";
import { ApolloError } from "apollo-server-express";
import mongoose from "mongoose";

type InputForCreatingNote = {
  input: {
    status: string;
    note: string;
  };
};

const noteResolver = {
  Query: {
    async getDataAboutNotes(parent: any, { type }: { type: string }) {
      const notes = await Notes.find({ status: type });
      return notes;
    },
  },
  Mutation: {
    async addNewNote(parent: any, { input }: InputForCreatingNote) {
      if (!input.note || !input.status) {
        throw new ApolloError("there are no note or status");
      }
      const result = await Notes.create({
        note: input.note,
        status: input.status,
      });
      return result;
    },
    async deleteNote(parent: any, { id }: { id: number }) {
      const findNote = await Notes.findOne({
        _id: new mongoose.Types.ObjectId(id),
      });
      if (!findNote) {
        throw new ApolloError("There are no notes with such id", "404");
      }
      await Notes.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
      return "note has been deleted successfully";
    },
    async moveNote(parent: any, input: { id: number; status: string }) {
      await Notes.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(input.id) },
        { status: input.status }
      );
      const result = await Notes.findOne({
        _id: new mongoose.Types.ObjectId(input.id),
      });
      return result;
    },
  },
};
export default noteResolver;
