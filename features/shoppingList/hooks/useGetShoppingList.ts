import { queryKeys } from "@/lib/react-query/Keys";
import { useQuery } from "@tanstack/react-query";
import { getAllShoppingListItems } from "../api/ShoppingList.service";

export default function useGetShoppingList() {
    return useQuery({
        queryKey: queryKeys.shoppingList,
        queryFn: getAllShoppingListItems
    })
}