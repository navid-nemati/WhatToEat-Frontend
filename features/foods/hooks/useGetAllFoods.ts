import { GetAllFoods } from "@/features/foods/api/Food.service"
import { queryKeys } from "@/lib/react-query/Keys";
import { useQuery } from "@tanstack/react-query";

export function useGetAllFoods() {
    return useQuery({
        queryKey: queryKeys.foods,
        queryFn: GetAllFoods,
    });
}

