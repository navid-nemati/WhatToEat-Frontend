import { CreateIngredient } from "@/features/Ingredient/api/Ingredient.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";

export default function useCreateIngredient() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: CreateIngredient,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey: queryKeys.ingredients})
        }
    })
}