import { Request, Response } from "express";
import Notes from "../../../models/note";
import mongoose from "mongoose";

const moveNote = async (req: Request, res: Response) => {
  try {
    const { id, status } = req.body;
    await Notes.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { status }
    );
    res.status(200).json({ message: "status has been updated successfully" });
  } catch (e: any) {
    res.status(e.statusCode).json(e.message);
  }
};
export default moveNote;
