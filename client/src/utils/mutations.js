import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

//can make the below two resolvers all in one
//should be adding recipe to meal plan
export const ADD_RECIPE = gql`
  mutation addRecipe($recipes: [ID]!) {
    addRecipe(recipes: $recipes) {
    creationDate
      recipes {
        _id
        name
        description
      }
    }
  }
`;

export const ADD_RECIPE_DETAILS = gql`
  mutation addRecipeDetails($recipeDetails: [ID]!, $spoonId: Int!, $title: String!, $image: String, $imageType: String!, $servings: Int, $readyInMinutes: Int, $spoonacularSourceUrl: String, $pricePerServing: Int, $cheap: Boolean, $dishTypes: String, $extendedIngredients: String, $summary: String, $winePairing: String) {
    addRecipeDetails(recipes: $recipes) {
      _id
    }
  }
`;

export const REMOVE_RECIPE = gql`
mutation RemoveRecipe($recipeId: String!) {
    RemoveRecipe(recipeID: $recipeId) {
    _id
    name
    description
  }
}
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_RATING = gql`
  mutation addRaiting($stars: Int!) {
    addRaiting(stars: $stars) {
      creationDate
      _id
      commentBody
      user {
        _id
        name
      }
      recipe {
        _id
        name
    }
  }
}
`;

export const REMOVE_RATING = gql`
mutation RemoveRaiting($id: ID!) {
    RemoveRating(ID: $id) 
}
`;


