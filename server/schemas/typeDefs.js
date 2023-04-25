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
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    removeRecipes(recipes: [ID]!): MealPlan
    addToMealPlan(_id: ID!, slot: Int!, position: Int!): MealPlan
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
