import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShoppingListItem } from "../api/ShoppingList.service";
import { queryKeys } from "@/lib/react-query/Keys";

export default function useAddShoppingList() {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addShoppingListItem,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: queryKeys.shoppingList})
        }
    })

}