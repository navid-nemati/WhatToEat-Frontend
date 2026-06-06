import { DeleteFood } from "@/features/Food/api/Food.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";

export function useDeleteFood() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => DeleteFood(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.foods })
        }
    })
}