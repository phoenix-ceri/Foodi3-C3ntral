import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";



type EagerRating = {
  readonly id: string;
  readonly stars: number;
  readonly commentBody: string;
}

type LazyRating = {
  readonly id: string;
  readonly stars: number;
  readonly commentBody: string;
}

export declare type Rating = LazyLoading extends LazyLoadingDisabled ? EagerRating : LazyRating

export declare const Rating: (new (init: ModelInit<Rating>) => Rating)

type EagerRecipeDetails = {
  readonly id: string;
  readonly spoonID?: string | null;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly imageType?: string | null;
  readonly servings?: number | null;
  readonly readyInMinutes?: number | null;
  readonly spoonacularSourceUrl?: string | null;
  readonly pricePerServing?: number | null;
  readonly cheap?: boolean | null;
  readonly dishTypes?: string | null;
  readonly extendedIngredients?: string | null;
  readonly summary?: string | null;
  readonly winePairing?: string | null;
  readonly rating?: Rating | null;
}

type LazyRecipeDetails = {
  readonly id: string;
  readonly spoonID?: string | null;
  readonly title?: string | null;
  readonly image?: string | null;
  readonly imageType?: string | null;
  readonly servings?: number | null;
  readonly readyInMinutes?: number | null;
  readonly spoonacularSourceUrl?: string | null;
  readonly pricePerServing?: number | null;
  readonly cheap?: boolean | null;
  readonly dishTypes?: string | null;
  readonly extendedIngredients?: string | null;
  readonly summary?: string | null;
  readonly winePairing?: string | null;
  readonly rating?: Rating | null;
}

export declare type RecipeDetails = LazyLoading extends LazyLoadingDisabled ? EagerRecipeDetails : LazyRecipeDetails

export declare const RecipeDetails: (new (init: ModelInit<RecipeDetails>) => RecipeDetails)

type EagerMealPlan = {
  readonly id: string;
  readonly creationDate?: string | null;
  readonly slot: number;
  readonly position: number;
  readonly recipes?: RecipeDetails | null;
}

type LazyMealPlan = {
  readonly id: string;
  readonly creationDate?: string | null;
  readonly slot: number;
  readonly position: number;
  readonly recipes?: RecipeDetails | null;
}

export declare type MealPlan = LazyLoading extends LazyLoadingDisabled ? EagerMealPlan : LazyMealPlan

export declare const MealPlan: (new (init: ModelInit<MealPlan>) => MealPlan)

type EagerAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Auth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly token?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Auth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly token?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Auth = LazyLoading extends LazyLoadingDisabled ? EagerAuth : LazyAuth

export declare const Auth: (new (init: ModelInit<Auth>) => Auth) & {
  copyOf(source: Auth, mutator: (draft: MutableModel<Auth>) => MutableModel<Auth> | void): Auth;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly username: string;
  readonly email?: string | null;
  readonly mealPlan?: MealPlan | null;
  readonly Auth?: Auth | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAuthId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly username: string;
  readonly email?: string | null;
  readonly mealPlan?: MealPlan | null;
  readonly Auth: AsyncItem<Auth | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAuthId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}