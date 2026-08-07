import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePurchasedShoppingListItems } from "../api/ShoppingList.service";
import { queryKeys } from "@/lib/react-query/Keys";

export function useDeletePurchasedShoppingList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePurchasedShoppingListItems,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.shoppingList,
      });
    },
  });
}