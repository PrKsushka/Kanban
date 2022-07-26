import express from "express";
import connectionToMongoDataBase from "./db/db";
import note from "./db/routes/noteRoutes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectionToMongoDataBase();
app.use(note);
app.listen(3001, () => {
  console.log("port is listening on port 3001");
});
