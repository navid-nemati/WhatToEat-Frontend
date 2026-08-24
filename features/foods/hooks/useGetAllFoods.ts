import { GetAllFoods } from "@/features/foods/api/Food.service"
import { queryKeys } from "@/lib/react-query/Keys";
import { useQuery } from "@tanstack/react-query";
import { IFoodQueryParams } from "../types/Food";

export function useGetAllFoods(params?: IFoodQueryParams) {
    return useQuery({
        queryKey: queryKeys.foodsFiltered(params || {}),
        queryFn: () => GetAllFoods(params),
    });
}

