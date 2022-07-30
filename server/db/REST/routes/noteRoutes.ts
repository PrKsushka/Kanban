import express from "express";
import getDataAboutNotes from "../controllers/note/getDataAboutNotes";
import addNewNote from "../controllers/note/addNewNote";
import moveNote from "../controllers/note/moveNote";
import deleteNote from "../controllers/note/deleteNote";

const note = express.Router();
note.get("/getNotes", getDataAboutNotes);
note.post("/createNote", addNewNote);
note.patch("/changeStatus", moveNote);
note.delete("/deleteNote/:id", deleteNote);
export default note;
