import { CreateCategory } from "@/features/categories/api/Category.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/Keys";

export default function useCreateCategory() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: CreateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.categories})
        }
    })

}