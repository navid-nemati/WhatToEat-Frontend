import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UpdateShoppingList } from "../types/UpdateShoppingList"
import { updateShoppingListItem } from "../api/ShoppingList.service"
import { queryKeys } from "@/lib/react-query/Keys"

export default function useUpdateShoppingListItem() {

    const queryClient = useQueryClient()

    return useMutation({
        // mutationFn: ({ id, dto }
        //     : {
        //         id: string,
        //         dto: UpdateShoppingList
        //     }
        // ) => updateShoppingListItem(id, dto),
        mutationFn: (dto: UpdateShoppingList) => {
            return updateShoppingListItem(dto)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.shoppingList })
        }
    })
}