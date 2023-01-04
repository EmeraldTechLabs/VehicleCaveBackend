import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    Users: [User]
    User(id: ID!): User
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    userName: String
    email: String
    role: String
    permissions: [String]
    organization: String
    branchList: [String]
  }
`;
