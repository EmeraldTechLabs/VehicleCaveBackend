import mongoose from "mongoose";
import dotenv from "dotenv";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import jsonwebtoken from "jsonwebtoken";
import { startStandaloneServer } from "@apollo/server/standalone";
// resolvers
import { resolvers as userResolver } from "./resolvers/userResolver";
import { resolvers as branchResolver } from "./resolvers/branchResolver";
import { resolvers as organizationResolver } from "./resolvers/organizationResolver";
import { resolvers as vehicleResolver } from "./resolvers/vehicleResolver";
//typedefs
import { typeDefs as usertypeDefs } from "./typeDefs/userTypeDefs";
import { typeDefs as branchtypedefs } from "./typeDefs/branchTypeDefs";
import { typeDefs as organizationtypedefs } from "./typeDefs/organizationTypeDefs";
import { typeDefs as vehicletypeDefs } from "./typeDefs/vehicleTypeDefs";

dotenv.config();

const schema = makeExecutableSchema({
  typeDefs: [
    usertypeDefs,
    branchtypedefs,
    organizationtypedefs,
    vehicletypeDefs,
  ],
  resolvers: [
    userResolver,
    branchResolver,
    // organizationResolver,
    // vehicleResolver,
  ],
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
