import { CreateFood } from "@/features/foods/api/Food.service";
import { queryKeys } from "@/lib/react-query/Keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useCreateFood () {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: CreateFood,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.foods})
        }
    })
}