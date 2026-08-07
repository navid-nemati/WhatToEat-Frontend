import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAllShoppingListItems } from "../api/ShoppingList.service";
import { queryKeys } from "@/lib/react-query/Keys";

export function useDeleteAllShoppingList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAllShoppingListItems,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.shoppingList,
      });
    },
  });
}