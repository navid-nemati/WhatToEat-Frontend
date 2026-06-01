import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";
import { GetAllIngredients } from "@/features/Ingredient/api/Ingredient.service";
import { IngredientQueryParams } from "@/features/Ingredient/types/Ingredient";


export default function useGetAllIngredients (params?: IngredientQueryParams) {
    return useQuery({
        queryKey: queryKeys.ingredientsFiltered(params || {}),
        queryFn: () => GetAllIngredients(params)
    })
}