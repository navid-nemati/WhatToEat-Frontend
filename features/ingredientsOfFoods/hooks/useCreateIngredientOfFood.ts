import { CreateIngredientOfFood } from "@/features/ingredientsOfFoods/api/IngredientOfFood.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/Keys";

export default function UseCreateIngredientOfFood() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: CreateIngredientOfFood,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey: queryKeys.ingredientOfFood})
        }
    })
}