import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddToFavoriteList } from "../api/favoriteList.service";
import { queryKeys } from "@/lib/react-query/Keys";


export default function AddToFavoriteListHook() {

    const queryClint = useQueryClient()

    return useMutation({
        mutationFn: AddToFavoriteList,
        onSuccess: () => {
            queryClint.invalidateQueries({queryKey: queryKeys.favoriteList})
        }
    })

}