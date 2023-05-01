// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Auth, User, Rating, RecipeDetails, MealPlan } = initSchema(schema);

export {
  Auth,
  User,
  Rating,
  RecipeDetails,
  MealPlan
};