const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Rating {
    value: Int
    commentBody: String
    username: String
    createdAt: String
  }

  type Recipe {
    _id: ID
    spoonRecipe: [RecipeDetails]
    ratings: [Rating]
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
  }

  type MealPlan {
    _id: ID
    creationDate: String
    slot: Int!
    position: Int!
    recipes: [Recipe]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    mealPlans: [MealPlan]
    recipes: [Recipe]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    getAllRecipes: [Recipe]
    getSingleRecipe: [Recipe]
    getComments: [Rating]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    removeRecipes(recipes: [ID]!): MealPlan
    addToMealPlan(_id: ID!, slot: Int!, position: Int!): MealPlan
    login(email: String!, password: String!): Auth
    addRecipeDetails(recipeDetails: [ID]!,spoonId: Int!,title: String!,image: String,imageType: String!,servings: Int, readyInMinutes: Int, spoonacularSourceUrl: String, pricePerServing: Int, cheap: Boolean, dishTypes: String, extendedIngredients: String, summary: String, winePairing: String): RecipeDetails
    addRecipe($recipes: [ID]!): Recipe
  }
`;

module.exports = typeDefs;
