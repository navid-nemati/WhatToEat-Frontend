"use client"

import useGetAllIngredients from "@/features/ingredients/hooks/useGetAllIngredients";
import { useState } from "react"

interface props {
    onSelect: (id: string) => void
}

export default function SelectIngredient({ onSelect }: props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [submitSearch, setSubmitSearch] = useState('');

    const SubmitSearch = () => {
        setSearchTerm(submitSearch)
    }

    const [selectedId, setSelectedId] = useState('');

    const {
        data: ingredient,
        isLoading,
        isError,
        error
    } = useGetAllIngredients({ name: searchTerm })

    const handleSearchChange = (evemt: React.ChangeEvent<HTMLInputElement>) => {
        setSubmitSearch(evemt.target.value)
    }

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const id = e.target.value;
    //     setSelectedId(id);

    //     if (id) {
    //         onSelect(id);
    //     }
    // }

    const handleChangeBtn = (id: string) => {
        setSelectedId(id);

        if (id) {
            onSelect(id);
        }
    }

    // const clearId = () => {
    //     setSelectedId('');
    //     onSelect('');
    // }

    if (isError) {
        return (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <p className="text-red-500 text-center p-4">
                    {(error as Error).message}
                </p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="p-3">
                <span>در حال بارگذاری...</span>
            </div>
        )
    }

    return (
        <div className="p-3 rounded-lg border border-gray-300 shadow-md
         flex flex-col gap-2 bg-slate-100">
            <div className="flex flex-col items-center gap-1.5">
                <label>انتخاب ماده اولیه</label>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="جستجو ماده اولیه ..."
                        value={submitSearch}
                        onChange={handleSearchChange}
                        autoComplete="off"
                        className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-1 outline-sky-300 placeholder:text-sm"
                    />
                    <button
                        className="text-lg"
                        onClick={SubmitSearch}
                    >
                        🔎
                    </button>
                </div>

            </div>

            <div className="h-52 overflow-y-auto selectIngredient">
                <div className="flex flex-col gap-1 selectIngredient select-none mx-1">
                    {ingredient?.map((i) => (
                        <div
                            key={i.id}
                            onClick={() => handleChangeBtn(i.id)}
                            className={`px-2 py-1 rounded-sm 
                        ${i.id == selectedId ? 'bg-emerald-200' : 'bg-white'}
                        `}>
                            {i.name}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}