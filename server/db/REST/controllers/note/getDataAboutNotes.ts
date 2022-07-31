import { Request, Response } from "express";
import Notes from "../../../models/note";

const getDataAboutNotes = async (req: Request, res: Response) => {
  try {
    let notes;
    const toDoNotes = await Notes.find({ status: "do" });
    const inProgressNotes = await Notes.find({ status: "progress" });
    const doneNotes = await Notes.find({ status: "done" });
    const data = [
      { do: toDoNotes },
      { progress: inProgressNotes },
      { done: doneNotes },
    ];
    res.status(200).json(data);
  } catch (e: any) {
    res.status(e.statusCode).json(e.message);
  }
};
export default getDataAboutNotes;
