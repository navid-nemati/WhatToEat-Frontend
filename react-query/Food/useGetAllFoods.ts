import { GetAllFoods } from "@/Services/Food.service"
import { queryKeys } from "../Keys"
import { useQuery } from "@tanstack/react-query";

export function useGetAllFoods() {
    return useQuery({
        queryKey: queryKeys.foods,
        queryFn: GetAllFoods,
    });
}