//need to use the context middleware from the Apollo Server configured in the server file and pass it in as the third arguement for all requests where authorization is required. Example would be saving a category and deleting it
//context is like a sessionId or cookie for a user

const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
  },
  Mutation: {},
};

module.exports = resolvers;
