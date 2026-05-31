import { ICategoryQueryParams } from "@/types/Category/Category";
import { IngredientQueryParams } from "@/types/Ingredient/Ingredient";

export const queryKeys = {
    foods: ["foods"] as const,
    ingredients: ["ingredients"] as const,
    categories: ["categories"] as const,
    ingredientOfFood: ["ingredientOfFood"] as const,
    ingredientsFiltered: (params: IngredientQueryParams) => [...queryKeys.ingredients, params],
    categoriesFiltered: (params: ICategoryQueryParams) => [...queryKeys.categories, params]
}