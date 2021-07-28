const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type SimilarResult {
    _id: ID!
    Name: String
    Type: String
    wTeaser: String
    wUrl: String
    yUrl: String
  }


  type User {
    _id: ID!
    username: String
    email: String
    about: String
    profilePic: String
    savedCategories: [Category]
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
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateAbout(about: String!): User
    singleFileUpload(file: String): String
    getSimilarities(term: String!, category: String!): [SimilarResult]
    saveCategory(title: String, type: String, description: String, wikiUrl: String, youtubeUrl: String, image: String): User
    removeCategory(categoryTitle: String!): User
  }
`;

module.exports = typeDefs;
