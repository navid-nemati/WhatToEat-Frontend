import { CreateFood } from "@/features/Food/api/Food.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";

export function useCreateFood () {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: CreateFood,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.foods})
        }
    })
}