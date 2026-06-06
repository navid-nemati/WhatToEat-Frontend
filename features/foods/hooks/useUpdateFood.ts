import { UpdateFood } from "@/features/Food/api/Food.service";
import { IUpdateFoodDto } from "@/features/Food/types/Food";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";

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