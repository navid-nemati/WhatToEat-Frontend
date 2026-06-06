import { CreateCategory } from "@/features/Category/api/Category.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";

export default function useCreateCategory() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: CreateCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.categories})
        }
    })

}