import { UpdateIngredientOfFood } from "@/Services/IngredientOfFood.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { queryKeys } from "../Keys"
import { IUpdateIngredientsOfFood } from "@/types/Ingredient/IngredientOfFood"

export default function UseUpdateIngredientOfFood() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (dto: IUpdateIngredientsOfFood) => UpdateIngredientOfFood(dto),
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey: queryKeys.ingredientOfFood})
        }
    })
}