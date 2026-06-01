import { UpdateIngredient } from "@/features/Ingredient/api/Ingredient.service";
import { IUpdateIngredient } from "@/features/Ingredient/types/Ingredient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";

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