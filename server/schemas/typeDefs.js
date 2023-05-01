const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Rating {
    stars: Int!
    commentBody: String!
    user: User
    createdAt: String
  }

  type RecipeDetails {
    _id: ID
    spoonId: Int
    title: String
    image: String
    imageType: String
    servings: Int
    readyInMinutes: Int
    spoonacularSourceUrl: String
    pricePerServing: Float
    cheap: Boolean
    dishTypes: [String]
    extendedIngredients: [String]
    summary: String
    winePairing: [String]
    rating: [Rating]
  }

  type MealPlan {
    _id: ID
    creationDate: String
    slot: Int!
    position: Int!
    recipes: [RecipeDetails]
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    mealPlans: [MealPlan]
    recipes: [RecipeDetails]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getUser: User
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username:String!, email: String!, password: String!): Auth
    removeRecipes(RecipeDetails: [ID]!): MealPlan
    addToMealPlan(recipe: Int!, slot: Int!, position: String!): MealPlan
    login(email: String!, password: String!): Auth
    addRecipeDetails(RecipeDetails: [ID]!,spoonId: Int!,title: String!,image: String,imageType: String!,servings: Int, readyInMinutes: Int, spoonacularSourceUrl: String, pricePerServing: Int, cheap: Boolean, dishTypes: String, extendedIngredients: String, summary: String, winePairing: String): RecipeDetails
    addRating(stars: Int!, commentBody: String!, username: String!): RecipeDetails
    removeRating(_id: ID!):Rating
  }
`;

module.exports = typeDefs;
