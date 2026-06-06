import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/Keys";
import { GetFoodDetail } from "@/features/foods/api/Food.service";

export default function useGetFoodDetail(id: string) {
    return useQuery({
        queryKey: [queryKeys.foods, id],
        queryFn: () => GetFoodDetail(id),
    })
}