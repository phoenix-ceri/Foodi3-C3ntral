const { AuthenticationError } = require('apollo-server-express');
const { User, RecipeDetails, MealPlan } = require('../models');
const { signToken } = require('../utils/auth');


//this is where you talk to your database through your models (you need the resolvers and the type defs to match by name and be 1:1) It also has to be in the same category (AKA query to query, mutation to mutation)

//our resolver is slightly different than the user resolver for the boilerplate. the boilerplate uses (parent, args, context) and an if/else. Do we need to do that to make this work? I mean the boilerplate has other things in it that we don't use (orders, etc), but the basic logic is still slightly different and I'm wondering if we modify the logic to be like that then ? I don't want to mess with it because I'm not entirely sure the reasoning Michael gave you for doing it the way we are, so here we are lol 
const resolvers = {
  Query: {
    getUser:
      async (_, args) => {
        const userSimple = await User.findById(args._id).
          populate({ path: "mealPlans", model: "MealPlan", populate: { path: "recipes", model: "RecipeDetails" } })
        return userSimple;
      },
      me:
      async (_, args, context) => {
        try{
        const userSimple = await User.findById(context.user._id)
          // populate({ path: "mealPlans", model: "MealPlan", populate: { path: "recipes", model: "RecipeDetails" } })
          console.log(userSimple);
        return userSimple;
        } catch(err) {
          console.log(err);
          throw new AuthenticationError(err.message)
        }
      }
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, username, email, password }) => {
      const user = await User.create({ username, firstName, lastName, email, password });
      const token = signToken(user);
      console.log(user, "you successfully signed up!")
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      //console.log(email, "this is working!")
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      //console.log(password, "this is also working!")
      const token = signToken(user);

      return { token, user };
    },
    addToMealPlan: async (parent, args, context) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { mealPlans: args } },
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
    addRating: async (parent, { recipeId, commentBody, stars }, context) => {
      //should this be context.recipe? I think user is right? 
      if (context.user) {
        return RecipeDetails.findOneAndUpdate(
          { _id: recipeId },
          {
            $addToSet: {
              reviews: { stars, commentBody, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeRating: async (parent, args, context) => {
      const updatedRating = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedReviews: { ratingId: args.ratingId } } },
        { new: true }
      );
      if (!updatedRating) {
        throw new AuthenticationError("Couldn't find user with this id!");
      }
      return updatedUser;
    },

  },
};

module.exports = resolvers;