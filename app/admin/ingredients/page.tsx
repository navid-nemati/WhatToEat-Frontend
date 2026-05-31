'use client'

import Container from "@/components/container";
import CreateIngredientComponent from "@/components/ingredient/createIngredient";
import IngredientItem from "@/components/ingredient/ingredientItem";
import LoadingComponent from "@/components/loading";
import useGetAllIngredients from "@/react-query/Ingredient/useGetAllIngredients";
import { useState } from "react";

export default function IngredientsPage() {

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
    } = useGetAllIngredients({ name: searchTerm })

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitSearch(event.target.value);

        //setSearchTerm(event.target.value);
        // توجه: با هر تغییر در searchTerm، useQuery دوباره اجرا خواهد شد
        // و تابع GetAllIngredients با پارامتر جدید fetch را انجام خواهد داد.
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
                        <CreateIngredientComponent />
                    </div>
                    <div className="flex gap-4">
                        <span className="text-2xl text-primary-darker">مواد اولیه</span>
                        <form className="flex gap-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="جستجو..."
                                    value={submitSearch}
                                    onChange={handleSearchChange}
                                    className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-1 outline-sky-300"
                                />
                                {/* {submitSearch != '' && (
                                    <button
                                        type="submit"
                                        onClick={() => {
                                            setSubmitSearch(''),
                                            SubmitSearch
                                        }}
                                        className="absolute left-2 top-1/2
                                -translate-y-1/2 cursor-pointer text-gray-400
                                hover:text-gray-600 p-2
                                ">x</button>
                                )} */}

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
                            <IngredientItem key={i.id} id={i.id} name={i.name} />
                            // <div key={i.id}>
                            //     <div
                            //         onMouseEnter={() => setIsOpen(i.id)}
                            //         onMouseLeave={() => setIsOpen(null)}
                            //         className="relative px-3 py-2 bg-gray-100 border border-gray-300 
                            //     rounded-lg cursor-pointer">
                            //         {i.name}
                            //         {isOpen == i.id && (
                            //             <div className="absolute px-2 py-1 bg-gray-50 rounded-md border 
                            //     left-1/2 -translate-x-1/2
                            //   border-gray-300 flex items-center gap-1 text-xs -top-8.5 z-10">
                            //                 <button
                            //                     onClick={() => setEditingId(i.id)}
                            //                     className="text-amber-500 transition-all duration-200
                            //                  px-1.5 py-1 hover:bg-amber-400 rounded-md hover:text-white"
                            //                 >ویرایش
                            //                 </button>
                            //                 <button className="text-red-500 transition-all duration-200
                            //             px-1.5 py-1 hover:bg-red-400 rounded-md hover:text-white"
                            //                 >حذف
                            //                 </button>
                            //             </div>
                            //         )}
                            //     </div>

                            //     {editingId == i.id && (
                            //         <UpdateIngredientComponent id={i.id} />
                            //     )}
                            // </div>
                        ))}


                    </div>
                </div>
            </Container>
        </div>
    )
}