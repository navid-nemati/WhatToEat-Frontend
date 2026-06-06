import { UpdateIngredientOfFood } from "@/features/ingredientsOfFoods/api/IngredientOfFood.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IUpdateIngredientsOfFood } from "@/features/ingredientsOfFoods/types/IngredientOfFood"
import { queryKeys } from "@/lib/react-query/Keys"

export default function UseUpdateIngredientOfFood() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (dto: IUpdateIngredientsOfFood) => UpdateIngredientOfFood(dto),
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey: queryKeys.ingredientOfFood})
        }
    })
}