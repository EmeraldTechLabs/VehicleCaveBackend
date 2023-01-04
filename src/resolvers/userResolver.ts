import user from "../models/user";

export const resolvers = {
  Query: {
    Users: async () => {
      const allUsers = await user.find({});
      console.log("allUsers", allUsers);
      return allUsers;
    },
    User: async (_root: any, args: any) => {
      console.log("args", args);
      // const userbyId = await user.findById(id);
    },
  },
  // Mutation: {
  //   createUser: async (_root: any, { users }: any) => {
  //     const userss = await user.create({ users });
  //   },
  // },
};
