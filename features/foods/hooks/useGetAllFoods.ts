import { GetAllFoods } from "@/features/Food/api/Food.service"
import { queryKeys } from "../../../react-query/Keys"
import { useQuery } from "@tanstack/react-query";

export function useGetAllFoods() {
    return useQuery({
        queryKey: queryKeys.foods,
        queryFn: GetAllFoods,
    });
}