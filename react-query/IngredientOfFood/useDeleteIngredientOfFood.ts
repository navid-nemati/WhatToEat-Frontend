import { DeleteIngredientOfFood } from "@/Services/IngredientOfFood.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { queryKeys } from "../Keys"

export default function UseDeleteIngredientOfFood() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => DeleteIngredientOfFood(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.ingredientOfFood })
        }
    })
}