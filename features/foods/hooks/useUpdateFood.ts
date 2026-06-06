import { UpdateFood } from "@/features/foods/api/Food.service";
import { IUpdateFoodDto } from "@/features/foods/types/Food";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/Keys";

export function useUpdateFood() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (dto: IUpdateFoodDto) =>
            UpdateFood(dto),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: queryKeys.foods })
        }
    })
}