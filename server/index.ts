import express from "express";
import connectionToMongoDataBase from "./db/db";
import note from "./db/REST/routes/noteRoutes";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import noteSchema from "./db/graphQl/schemas/noteSchema";
import noteResolver from "./db/graphQl/resolvers/note";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectionToMongoDataBase();
// app.use(note);

const server = new ApolloServer({
  introspection: true,
  typeDefs: noteSchema,
  resolvers: noteResolver,
});
server
  .start()
  .then((res) => {
    server.applyMiddleware({ app });
    app.listen(3001, () => {
      console.log("port is listening on port 3001");
    });
  })
  .catch((e) => {
    console.log(`something went wrong ${e}`);
  });
