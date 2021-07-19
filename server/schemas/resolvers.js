//need to use the context middleware from the Apollo Server configured in the server file and pass it in as the third arguement for all requests where authorization is required. Example would be saving a category and deleting it
//context is like a sessionId or cookie for a user

const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      if (!user) {
        throw new AuthenticationError("Something is wrong!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
