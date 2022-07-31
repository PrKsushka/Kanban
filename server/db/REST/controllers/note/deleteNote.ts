import { Request, Response } from "express";
import Notes from "../../../models/note";
import mongoose from "mongoose";

const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findNote = await Notes.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    if (!findNote) {
      return res
        .status(404)
        .json({ message: "There are no notes with such id" });
    }
    await Notes.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
    res.status(200).json({ message: "note has been deleted successfully" });
  } catch (e: any) {
    res.status(e.st).json(e.message);
  }
};
export default deleteNote;
