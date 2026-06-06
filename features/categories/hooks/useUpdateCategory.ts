import { UpdateCategory } from "@/features/Category/api/Category.service";
import { IUpdateCategory } from "@/features/Category/types/Category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";

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