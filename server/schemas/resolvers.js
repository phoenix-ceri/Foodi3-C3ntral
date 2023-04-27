const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');


//this is where you talk to your database through your models (you need the resolvers and the type defs to match by name and be 1:1) It also has to be in the same category (AKA query to query, mutation to mutation)

const resolvers = {
  Query: {
    getAllRecipes: async () => {
      const recipes = await Recipe.find();
      return recipes;
    },
    getSingleRecipe:
      async () => {
        const singleRecipe = await Recipe.find();
        return singleRecipe;
      },
    getComments:
      async () => {
        const comments = await Rating.find();
        return comments;
      }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addToMealPlan: async (parent, args, context) => {
      console.log(context, "THIS IS THE CONTEXT.USER CONSOLE LOG", args)
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedRecipes: args } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      } catch (err) {
        console.log(err);
        //tells the front end there is an error
        throw new AuthenticationError('You need to be logged in!');
      }

    },
    //can make the below two resolvers all in one
    //saves API recipe information to our MongoDB
    addRecipeDetails: async (parent, args, context) => {
      try { 
        const addDetails = await RecipeDetails.create(args)
        return addDetails;
      } catch (err) {
        console.log(err);
        throw new AuthenticationError('You need to be logged in!');
      }
    },
    //adding a recipe to the meal plan
   addRecipe: async (parent, args, context) => {
      try {
        const recipe = await Recipe.create(args)
        return recipe;
      } catch (err) {
        console.log(err);
        throw new AuthenticationError('You need to be logged in!');
      }
   },
    removeRecipes: async (parent, args, context) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedRecipes: { recipeId: args.recipeId } } },
        { new: true }
      );
      if (!updatedUser) {
        throw new AuthenticationError("Couldn't find user with this id!");
      }
      return updatedUser;
    },
  },
};

module.exports = resolvers;