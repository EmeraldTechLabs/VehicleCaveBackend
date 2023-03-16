import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// resolvers
import { resolvers as userResolver } from "./resolvers/userResolver";
//typedefs
import { typeDefs as usertypeDefs } from "./typeDefs/userTypeDefs";
import mongoose from "mongoose";

const schema = makeExecutableSchema({
  typeDefs: [usertypeDefs],
  resolvers: [userResolver],
});

const server = new ApolloServer({ schema });

await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: (params: any) => {
    return params;
  },
}).then((res) => console.log(res));

const DB_PORT = process.env.DB_PORT || "";
mongoose.connect(DB_PORT, {}).then(() => console.log("Connected!"));
