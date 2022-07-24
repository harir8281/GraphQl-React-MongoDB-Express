const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Users {
    id: ID!
    name: String!
    username: String!
  }

  type Query {
    name: String

    getAllUsers: [Users]
    getOneUser(id:ID):Users
  }

  input UsersInput{
    name:String,
    username:String
  }

  type Mutation{
  createUser(user:UsersInput):Users
  deleteUser(id:ID):String
  updateUser(id:ID,user:UsersInput):Users
  }
`;

module.exports = typeDefs;
