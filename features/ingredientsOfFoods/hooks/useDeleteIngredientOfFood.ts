import { DeleteIngredientOfFood } from "@/features/ingredientsOfFoods/api/IngredientOfFood.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { queryKeys } from "@/lib/react-query/Keys"

export default function UseDeleteIngredientOfFood() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => DeleteIngredientOfFood(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.ingredientOfFood })
        }
    })
}