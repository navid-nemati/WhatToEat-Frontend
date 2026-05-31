import { ICategoryQueryParams } from "@/types/Category/Category";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../Keys";
import { GetAllCategories } from "@/Services/Category.service";

export default function useGetAllCategories (params?: ICategoryQueryParams) {
    return useQuery({
        queryKey: queryKeys.categoriesFiltered(params || {}),
        queryFn: () => GetAllCategories(params)
    })
}