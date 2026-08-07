import { useMutation, useQueryClient } from "@tanstack/react-query"
import { queryKeys } from "@/lib/react-query/Keys"
import { deleteShoppingListItem } from "../api/ShoppingList.service"

export default function UseDeleteShoppingListItem() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id: string) => deleteShoppingListItem(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.shoppingList })
        }
    })
}