import { DeleteCategory } from "@/Services/Category.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../Keys";

export default function useDeleteCategory () {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => DeleteCategory(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.categories})
        }
    })

}