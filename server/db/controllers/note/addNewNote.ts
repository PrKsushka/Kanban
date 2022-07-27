import { Request, Response } from "express";
import Notes from "../../models/note";

const addNewNote = async (req: Request, res: Response) => {
  try {
    const { name, status } = req.body;
    if (!name || !status) {
      return res.status(500).json({ message: "there are no name or status" });
    }
    await Notes.create({ name, status });
    res.status(200).json({ message: "Note has been created successfully" });
  } catch (e: any) {
    res.status(e.statusCode).json(e.message);
  }
};
export default addNewNote;
