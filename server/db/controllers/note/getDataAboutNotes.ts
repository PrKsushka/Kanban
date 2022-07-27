import { Request, Response } from "express";
import Notes from "../../models/note";

const getDataAboutNotes = async (req: Request, res: Response) => {
  try {
    let notes;
    if (req.query.status === "do") {
      notes = await Notes.find({ status: "do" });
    } else if (req.query.status === "process") {
      notes = await Notes.find({ status: "process" });
    } else if (req.query.status === "done") {
      notes = await Notes.find({ status: "done" });
    } else {
      notes = await Notes.find({});
    }
    res.status(200).json(notes);
  } catch (e: any) {
    res.status(e.statusCode).json(e.message);
  }
};
export default getDataAboutNotes;
