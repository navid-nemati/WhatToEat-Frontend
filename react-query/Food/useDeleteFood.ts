import { DeleteFood } from "@/Services/Food.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../Keys";

export function useDeleteFood() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => DeleteFood(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.foods })
        }
    })
}