//need to use the context middleware from the Apollo Server configured in the server file and pass it in as the third arguement for all requests where authorization is required. Example would be saving a category and deleting it
//context is like a sessionId or cookie for a user

const { AuthenticationError, GraphQLUpload } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const cloudinary = require('cloudinary');
require('dotenv').config();

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },
    singleFileUpload: async (parent, {file}, context) => {
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      });

      if (context.user) {
        try {
          const result = await cloudinary.v2.uploader.upload(file, {
            allowed_formats: ['jpg', 'png'],
            public_id: '',
            folder: `${user.username}`
          });
        } catch (e) {
          return `Image could not be uploaded: ${e.message}`;
        }
        return `Succesful Photo Upload URL: ${result.url}`
      }
    },
    saveCategory: async (parent, { title, type, description, wikiUrl, youtubeUrl, image }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedCategories: {title: title, type: type, description: description, wikiUrl: wikiUrl, youtubeUrl: youtubeUrl, image: image } } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError("You need to be logged in!");
    },
    removeCategory: async (parent, { categoryId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCategories: { categoryId: categoryId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
