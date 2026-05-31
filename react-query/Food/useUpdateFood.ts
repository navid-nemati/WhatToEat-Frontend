import { UpdateFood } from "@/Services/Food.service";
import { IUpdateFoodDto } from "@/types/Food/Food";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../Keys";

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