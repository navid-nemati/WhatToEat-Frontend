import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteFavoriteListItem } from "../api/favoriteList.service";
import { queryKeys } from "@/lib/react-query/Keys";

export default function DeleteFavoriteListItemHook() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) =>  DeleteFavoriteListItem(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.favoriteList})
        }
    })

}