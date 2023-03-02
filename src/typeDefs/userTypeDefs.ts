import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    getUsers: [User]
    getUser(id: ID!): User
    getOrders(userName: String): [Order]
    getOrder(id: ID, name: String): Order
    getReivews(
      id: ID
      rating: Int
      reviewDate: String
      userName: String
    ): [Review]
  }

  type User {
    id: ID!
    userName: String!
    email: String!
    age: Int!
    role: String
    wishList: [Product]
  }

  type Product {
    productName: String
    price: Int
    currency: String
  }

  type Order {
    productName: String
    orderedDate: String
    shippingAddress: String
  }

  type Review {
    reviewDate: String
    ratng: Int!
    description: String
  }
`;
