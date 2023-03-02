import user from "../models/user";

export const resolvers = {
  Query: {
    getUsers: () => {
      return [
        {
          userName: "Rugved Patel",
          email: "patelrugved7@gmail.com",
          age: 15,
          role: "Admin",
          id: 1,
          wishList: [{ name: "Shoes", price: 45, currency: "USD" }],
        },
        {
          userName: "Rugved Patel",
          email: "patelrugved7@gmail.com",
          age: 15,
          role: "Admin",
          id: 1,
          wishList: [{ name: "Shoes", price: 45, currency: "USD" }],
        },
        {
          userName: "Rugved Patel",
          email: "patelrugved7@gmail.com",
          age: 15,
          role: "Admin",
          wishList: [{ name: "Shoes", price: 45, currency: "USD" }],
          id: 1,
        },
      ];
    },
    getUser: (root: any, { id }: any) => {
      return {
        userName: "Rugved Patel",
        email: "patelrugved7@gmail.com",
        age: 15,
        role: "Admin",
        wishList: [{ name: "Shoes", price: 45, currency: "USD" }],
        id: id,
      };
    },
    getReivews: (root: any, { id }: any) => {
      return {
        id: id,
      };
    },
    getOrders: () => {},
    getOrder: () => {},
  },
};
