import { UpdateIngredient } from "@/Services/Ingredient.service";
import { IUpdateIngredient } from "@/types/Ingredient/Ingredient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../Keys";

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