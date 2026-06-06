import { UpdateIngredientOfFood } from "@/features/IngredientOfFood/api/IngredientOfFood.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { queryKeys } from "../../../react-query/Keys"
import { IUpdateIngredientsOfFood } from "@/features/IngredientOfFood/types/IngredientOfFood"

export default function UseUpdateIngredientOfFood() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (dto: IUpdateIngredientsOfFood) => UpdateIngredientOfFood(dto),
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey: queryKeys.ingredientOfFood})
        }
    })
}