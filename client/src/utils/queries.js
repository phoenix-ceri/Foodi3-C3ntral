import { gql } from '@apollo/client';

export const QUERY_MEALPLAN = gql`
  query getMealPlan {
    mealPlan {
      _id
      name
      description
      creationDate
    }
  }
`

export const QUERY_RECIPES = gql`
  query getRecipes {
    recipes {
      _id
      name
      description
      creationDate
    }
  }
`

export const QUERY_SINGLE_RECIPE = gql`
  query getSingleRecipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
      _id
      name
      description
      }
    }
  }
`;

export const QUERY_USER = gql`
query getUser($userId: ID!) {
  user(id: $userId) {
    _id
    firstName
    lastName
    username
    email
    mealPlans {
      id
      name
      meals {
        id
        name
      }
    }
    recipes {
      _id
      spoonId
      title
      image
      imageType
      servings
      readyInMinutes
      spoonacularSourceUrl
      pricePerServing
      cheap
      dishTypes
      extendedIngredients
      summary
      winePairing
      rating {
        stars
        commentBody
        user {
          _id
          firstName
          lastName
          username
          email
        }
        createdAt
      }
    }
  }
}
`;

