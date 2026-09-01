import { useQuery } from "@tanstack/react-query";
import { GetAllFavoriteListItems } from "../api/favoriteList.service";
import { queryKeys } from "@/lib/react-query/Keys";

export default function GetFavoriteList() {
    return useQuery({
        queryKey: queryKeys.favoriteList,
        queryFn: GetAllFavoriteListItems,
        staleTime: 0
    })
}