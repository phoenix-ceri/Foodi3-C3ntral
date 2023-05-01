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
// export const ADD_RECIPE = gql`
//   mutation addRecipe($recipes: [ID]!) {
//     addRecipe(recipes: $recipes) {
//     creationDate
//       recipes {
//         _id
//         name
//         description
//       }
//     }
//   }
// `;

export const ADD_TO_MEALPLAN = gql`
mutation addToMealPlan($spoonId: Int!, $slot: Int!, $position: String!) {
  addToMealPlan(spoonId: $spoonId, slot: $slot, position: $position) {
    _id
  }
}`

export const ADD_RECIPE_DETAILS = gql`
  mutation addRecipeDetails($recipeDetails: [ID]!, $spoonId: Int!, $title: String!, $image: String, $imageType: String!, $servings: Int, $readyInMinutes: Int, $spoonacularSourceUrl: String, $pricePerServing: Int, $cheap: Boolean, $dishTypes: String, $extendedIngredients: String, $summary: String, $winePairing: String) {
    addRecipeDetails(recipes: $recipes) {
      _id
      reviews {
        _id
        commentBody
      }
    }
  }
`;

export const REMOVE_RECIPE = gql`
mutation removeRecipe($recipeId: String!) {
    removeRecipe(recipeID: $recipeId) {
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
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      username: $username
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
  mutation addRating($recipeId: ID!, $commentBody: String!, $stars: Int!) {
    addRating(recipeId: $recipeId, commentBody: $commentBody, stars: $stars) {
      _id
      reviews {
        stars
        commentBody
        createdAt
    }
  }
}
`;

export const REMOVE_RATING = gql`
mutation removeRating($_id: ID!) {
    removeRating(_id: $_id) {
      _id
    }
}
`;