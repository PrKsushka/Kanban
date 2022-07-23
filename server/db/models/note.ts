import * as mongoose from "mongoose";

const note = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
const Notes = mongoose.model("Notes", note);
export default Notes;
