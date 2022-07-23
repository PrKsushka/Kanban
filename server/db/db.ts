import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

const MONGO_URI =
  "mongodb+srv://ksushka:paris07012001@kanban.jtmut.mongodb.net/?retryWrites=true&w=majority";

interface ConnectionOptionsExtend extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const options: ConnectionOptionsExtend = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectionToMongoDataBase = async () => {
  try {
    await mongoose.connect(MONGO_URI, options);
    console.log("MongoDB connection success");
  } catch (err) {
    console.error("Mongodb connection failed");
    process.exit(1);
  }
};
export default connectionToMongoDataBase;
