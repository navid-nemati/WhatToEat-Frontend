import { UpdateIngredient } from "@/features/ingredients/api/Ingredient.service";
import { IUpdateIngredient } from "@/features/ingredients/types/Ingredient";
import { queryKeys } from "@/lib/react-query/Keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export default function useUpdateIngredient() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (dto: IUpdateIngredient) =>
            UpdateIngredient(dto),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.ingredients })
        }
    })
}