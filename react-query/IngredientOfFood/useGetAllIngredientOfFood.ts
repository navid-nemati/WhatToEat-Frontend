import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "../Keys"
import { GetAllIngredientByFoodId } from "@/Services/IngredientOfFood.service"

export default function UseGetAllIngredientOfFood(foodId: string) {
    return useQuery({
        queryKey: queryKeys.ingredientOfFood,
        queryFn: () => GetAllIngredientByFoodId(foodId)
    })
}