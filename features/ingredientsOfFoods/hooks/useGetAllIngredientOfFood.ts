import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../../../react-query/Keys"
import { GetAllIngredientByFoodId } from "@/features/IngredientOfFood/api/IngredientOfFood.service"

export default function UseGetAllIngredientOfFood(foodId: string) {
    return useQuery({
        queryKey: queryKeys.ingredientOfFood,
        queryFn: () => GetAllIngredientByFoodId(foodId)
    })
}