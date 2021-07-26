const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    savedCategories: [Category]
  }

  type SimilarResult {
    _id: ID!
    name: String
    wTeaser: String
    wUrl: String
    yUrl: String
  }

  type Category {
    _id: ID!
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
    getSimilarities: [SimilarResult]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    saveCategory(
      title: String
      type: String
      description: String
      wikiUrl: String
      youtubeUrl: String
      image: String
    ): User

    removeCategory(categoryTitle: String!): User
  }
`;

module.exports = typeDefs;
