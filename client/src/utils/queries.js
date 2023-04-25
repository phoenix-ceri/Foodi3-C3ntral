import { gql } from '@apollo/client';

export const QUERY_MEALPLANS = gql`
  query getMealPlan {
    mealPlan {
      _id
      name
      description
      image
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
query user($username: String!) {
  user(username: $username) {
      _id
      firstName
      lastName
      recipes {
        _id
        name
        description
        creationDate
    }
  }
}
`;