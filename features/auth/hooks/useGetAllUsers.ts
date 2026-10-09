import { queryKeys } from "@/lib/react-query/Keys";
import { useQuery } from "@tanstack/react-query";
import { GetAllUsers } from "../api/User.service";

export default function useGetAllUsers() {
    return (
        useQuery({
            queryKey: queryKeys.user,
            queryFn: GetAllUsers
        })
    )
}