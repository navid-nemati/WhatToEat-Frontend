import { ICategoryQueryParams } from "@/features/categories/types/Category";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/react-query/Keys";
import { GetAllCategories } from "@/features/categories/api/Category.service";

export default function useGetAllCategories (params?: ICategoryQueryParams) {
    return useQuery({
        queryKey: queryKeys.categoriesFiltered(params || {}),
        queryFn: () => GetAllCategories(params)
    })
}