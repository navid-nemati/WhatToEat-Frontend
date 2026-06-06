import { DeleteFood } from "@/features/foods/api/Food.service";
import { queryKeys } from "@/lib/react-query/Keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useDeleteFood() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => DeleteFood(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.foods })
        }
    })
}