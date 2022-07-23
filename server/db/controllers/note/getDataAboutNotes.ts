import { Request, Response } from "express";
import Notes from "../../models/note";

const getDataAboutNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Notes.find({});
    res.status(200).json(notes);
  } catch (e: any) {
    res.status(e.statusCode).json(e.message);
  }
};
export default getDataAboutNotes;
