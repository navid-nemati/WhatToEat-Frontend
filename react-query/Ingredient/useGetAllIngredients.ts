import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../Keys";
import { GetAllIngredients } from "@/Services/Ingredient.service";
import { IngredientQueryParams } from "@/types/Ingredient/Ingredient";


export default function useGetAllIngredients (params?: IngredientQueryParams) {
    return useQuery({
        queryKey: queryKeys.ingredientsFiltered(params || {}),
        queryFn: () => GetAllIngredients(params)
    })
}