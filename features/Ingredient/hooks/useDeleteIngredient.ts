import { DeleteIngredient } from "@/features/Ingredient/api/Ingredient.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";

export default function useDeleteIngredient() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => DeleteIngredient(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.ingredients })
        }
    })
}