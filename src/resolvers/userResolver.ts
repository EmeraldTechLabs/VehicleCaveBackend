import user from "../models/user";

export const resolvers = {
  Query: {
    greet: () => {
      return "hello";
    },
  },
};
