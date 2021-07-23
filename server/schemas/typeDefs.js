const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    savedCategories: [Category]
  }

  type Category {
    categoryId: ID!
    title: String
    type: String
    image: String
    description: String
    wikiUrl: String
    youtubeUrl: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    saveCategory(title: String, type: String, description: String, wikiUrl: String, youtubeUrl: String): User

    removeCategory(categoryId: ID!): User
  }
`;

module.exports = typeDefs;
