import { gql } from '@apollo/client';

export const QUERY_MEALPLANS = gql`
  query getMealPlan {
    mealPlan {
      _id
      title
      description
      image
      createdAt
    }
  }
`

export const QUERY_RECIPES = gql`
  query getRecipes {
    recipes {
      _id
      title
      description
    }
  }
`

export const QUERY_SINGLE_RECIPE = gql`
  query getSingleRecipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
      _id
      title
      description
      }
    }
  }
`;