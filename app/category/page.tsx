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
        <div className="pt-28 md:pt-32 pb-20">
            <Container>
                <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-2">
                        دسته‌بندی غذاها
                    </h3>
                    <p className="text-emerald-600/80 text-sm md:text-base">
                        دسته مورد نظر خود را برای مشاهده طرز تهیه انتخاب کنید
                    </p>
                </div>
            
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {data?.map((item, index) => (
                        <CategoryFilterItem 
                            key={item.id} 
                            id={item.id} 
                            name={item.name}
                            colorIndex={index}
                        />
                    ))}
                </div>
            </Container>
        </div>

        // <div className="pt-28 md:pt-30 pb-10">
        //     <Container>
        //         <h3 className="text-3xl text-bold text-emerald-950">دسته بندی ها</h3>

        //         <div className="flex flex-wrap gap-3 mt-5">
        //             {data?.map((i, index) => (
        //                 <CategoryFilterItem
        //                     key={i.id}
        //                     id={i.id}
        //                     name={i.name}
        //                     index={index}
        //                 />
        //             ))}
        //         </div>
        //     </Container>
        // </div>
    )
}