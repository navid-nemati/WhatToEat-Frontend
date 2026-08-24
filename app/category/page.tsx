"use client"

import CategoryFilterItem from "@/features/categories/components/categoryFilterItem";
import useGetAllCategories from "@/features/categories/hooks/useGetAllCategories";
import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";

export default function CategoryPage() {

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetAllCategories()

    if (isLoading) return (
        <LoadingComponent />
    )

    if (isError) {
        return (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <p className="text-red-500 text-center p-4">
                    {(error as Error).message}
                    {/* {toast.error((error as Error).message)} */}
                </p>
            </div>
        );
    }


    return (
        <div className="pt-28 md:pt-30 pb-10">
            <Container>
                <h3 className="text-3xl text-bold text-emerald-950">دسته بندی ها</h3>
            
                <div className="flex flex-wrap gap-3 mt-5">
                    {data?.map((i) => (
                        <CategoryFilterItem key={i.id} id={i.id} name={i.name}/>
                    ))}
                </div>
            </Container>
        </div>
    )
}