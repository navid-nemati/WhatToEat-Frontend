import { useQuery } from "@tanstack/react-query";
import { GetAllIngredients } from "@/features/ingredients/api/Ingredient.service";
import { IngredientQueryParams } from "@/features/ingredients/types/Ingredient";
import { queryKeys } from "@/lib/react-query/Keys";


export default function useGetAllIngredients (params?: IngredientQueryParams) {
    return useQuery({
        queryKey: queryKeys.ingredientsFiltered(params || {}),
        queryFn: () => GetAllIngredients(params)
    })
}