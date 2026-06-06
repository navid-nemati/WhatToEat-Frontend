import { UpdateCategory } from "@/features/categories/api/Category.service";
import { IUpdateCategory } from "@/features/categories/types/Category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/Keys";

export default function useUpdateCategory() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (dto: IUpdateCategory) =>
            UpdateCategory(dto),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.categories})
        }
    })

}