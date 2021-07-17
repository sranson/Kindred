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
    description: String
    wikiUrl: String
    youtubeUrl: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input saveCategoryInput {
    categoryId: ID!
    title: String
    type: String
    description: String
    wikiUrl: String
    youtubeUrl: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    saveCategory(categoryData: saveCategoryInput): User

    removeCategory(categoryId: ID!): User
  }
`;

module.exports = typeDefs;