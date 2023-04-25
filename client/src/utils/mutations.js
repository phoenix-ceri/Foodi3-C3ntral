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

export const REMOVE_RECIPE = gql`
mutation RemoveRecipe($recipeId: String!) {
    RemoveRecipe(recipeID: $recipeId) {
    _id
    name
    description
  }
}
`;

export const ADD_MEALPLAN = gql`
  mutation addMealPlan($mealPlan: [ID]!) {
    addMealPlan(mealPlan: $mealPlan) {
    creationDate
      mealPlans {
        _id
        name
        description
        recipes {
            _id
            name
          }    
      }
    }
  }
`;

export const REMOVE_MEALPLAN = gql`
mutation RemoveMealPlan($mealPlan: String!) {
    RemoveMealPlan(mealPlanID: $mealPlanId) {
    _id
    name
    description
    recipes {
        _id
        name
      }   
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


