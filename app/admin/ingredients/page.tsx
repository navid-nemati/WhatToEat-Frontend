'use client'

import Container from "@/shared/components/container";
import CreateIngredientComponent from "@/features/ingredients/components/createIngredient";
import IngredientItem from "@/features/ingredients/components/ingredientItem";
import LoadingComponent from "@/shared/components/loading";
import useGetAllIngredients from "@/features/ingredients/hooks/useGetAllIngredients";
import { useState } from "react";

export default function IngredientsPage() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const SubmitSearch = () => {
        setSearchQuery(searchInput)
    }

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetAllIngredients({ name: searchQuery })

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);

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
        <div className="pt-30 pb-10">
            <Container>
                <div className="max-w-4xl mx-auto">

                    {/* هدر صفحه */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-slate-800">مدیریت مواد اولیه</h1>
                        <p className="text-slate-500 mt-1">مواد اولیه سایت را مدیریت و ایجاد کنید.</p>
                    </div>

                    <div className="w-full flex flex-col lg:flex-row gap-4">
                        {/* ساخت ماده اولیه*/}
                        <CreateIngredientComponent />

                        {/* بخش جستجو */}
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
                            <div className="mb-4 flex items-center gap-2">
                                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                                <h2 className="text-lg font-bold text-slate-800">جستجو</h2>
                            </div>
                            <form onSubmit={SubmitSearch} className="relative">
                                <input
                                    type="text"
                                    value={searchInput}
                                    onChange={handleSearchChange}
                                    placeholder="نام ماده اولیه..."
                                    className="w-full pr-12 pl-32 py-3 bg-slate-50 border border-slate-200 rounded-xl 
                                focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white 
                                transition-all duration-200"
                                />
                                {/* آیکون جستجو */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                {/* دکمه جستجو به صورت Overlay داخل اینپوت */}
                                <button
                                    type="submit"
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-emerald-600 px-4 py-2 rounded-lg 
                                text-white text-sm font-medium transition-all hover:bg-emerald-700 hover:shadow-md"
                                >
                                    جستجو
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* بخش لیست مواد اولیه*/}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                                <h2 className="text-lg font-bold text-slate-800">لیست مواد اولیه</h2>
                            </div>
                            <span className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">
                                {data?.length || 0} ماده اولیه
                            </span>
                        </div>

                        <hr className="mb-6 border-slate-100" />

                        <div className="flex gap-2 flex-wrap">
                            {data?.length === 0 ? (
                                <div className="w-full text-center py-10 text-slate-400">
                                    <p>هنوز هیچ ماده اولیه ای ثبت نشده است.</p>
                                </div>
                            ) : (
                                data?.map(i => (
                                    <IngredientItem key={i.id} id={i.id} name={i.name} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}