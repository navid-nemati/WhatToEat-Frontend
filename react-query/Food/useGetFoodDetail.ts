import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../Keys";
import { GetFoodDetail } from "@/Services/Food.service";

export default function useGetFoodDetail(id: string) {
    return useQuery({
        queryKey: [queryKeys.foods, id],
        queryFn: () => GetFoodDetail(id),
    })
}