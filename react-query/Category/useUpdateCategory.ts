import { UpdateCategory } from "@/Services/Category.service";
import { IUpdateCategory } from "@/types/Category/Category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../Keys";

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