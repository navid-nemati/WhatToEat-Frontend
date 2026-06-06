'use client'

import CategoryItem from "@/features/categories/components/categoryItem";
import CreateCategoryComponent from "@/features/categories/components/CreateCategory";
import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";
import useGetAllCategories from "@/features/categories/hooks/useGetAllCategories";
import { useState } from "react";

export default function AdminCategoriesPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [submitSearch, setSubmitSearch] = useState('');

    const SubmitSearch = () => {
        setSearchTerm(submitSearch)
    }

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetAllCategories({ name: searchTerm })

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitSearch(event.target.value);
    };

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
        <div>
            <Container>
                <div className="pt-30">
                    <div className="flex flex-col lg:flex-row mb-10">
                        <CreateCategoryComponent />
                    </div>
                    <div className="flex gap-4">
                        <span className="text-2xl text-primary-darker">دسته بندی ها</span>
                        <form className="flex gap-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="جستجو..."
                                    value={submitSearch}
                                    onChange={handleSearchChange}
                                    className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-1 outline-sky-300"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={SubmitSearch}
                                className="bg-sky-300 px-3 py-2 rounded-md text-white
                                text-shadow-sm transition-all duration-200 hover:scale-105
                                hover:shadow-md"
                            >
                                جستجو
                            </button>
                        </form>

                    </div>

                    <hr className="my-6 text-gray-300" />
                    <div className="flex gap-2 flex-wrap">
                        {data?.map(i => (
                            <CategoryItem key={i.id} id={i.id} name={i.name} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}