import { ICategoryQueryParams } from "@/features/Category/types/Category";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../react-query/Keys";
import { GetAllCategories } from "@/features/Category/api/Category.service";

export default function useGetAllCategories (params?: ICategoryQueryParams) {
    return useQuery({
        queryKey: queryKeys.categoriesFiltered(params || {}),
        queryFn: () => GetAllCategories(params)
    })
}