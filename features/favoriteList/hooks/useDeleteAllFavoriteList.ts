import { queryKeys } from "@/lib/react-query/Keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteAllDeleteFavoriteListItem } from "../api/favoriteList.service";

export default function DeleteAllFavoriteList() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: DeleteAllDeleteFavoriteListItem,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.favoriteList})
        }
    })

}