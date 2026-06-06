import { DeleteCategory } from "@/features/categories/api/Category.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/Keys";

export default function useDeleteCategory () {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => DeleteCategory(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.categories})
        }
    })

}