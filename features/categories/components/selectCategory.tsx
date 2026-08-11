"use client";

import { useEffect, useState } from "react";

import useGetAllCategories from "@/features/categories/hooks/useGetAllCategories";
import { parseApiError } from "@/utils/apiError";

interface SelectCategoryProps {
    value?: string;
    onSelect: (id: string) => void;
}

export default function SelectCategory({
    value = "",
    onSelect,
}: SelectCategoryProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [selectedId, setSelectedId] = useState(value);

    const {
        data: categories,
        isLoading,
        isError,
        error,
    } = useGetAllCategories({
        name: searchTerm,
    });

    const parsedError = isError ? parseApiError(error) : null;

    useEffect(() => {
        setSelectedId(value);
    }, [value]);

    const handleSearch = () => {
        setSearchTerm(searchInput.trim());
    };

    const handleCategorySelect = (id: string) => {
        setSelectedId(id);
        onSelect(id);
    };

    if (isError) {
        return (
            <div className="rounded-lg bg-red-50 p-4">
                <p className="text-center text-sm text-red-500">
                    {(error as Error).message}
                </p>
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col gap-3 rounded-lg border border-gray-300 bg-slate-50 p-3">
            <label className="text-sm font-medium text-gray-600">
                انتخاب دسته‌بندی
            </label>

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="جست‌وجوی دسته‌بندی..."
                    value={searchInput}
                    onChange={(event) =>
                        setSearchInput(event.target.value)
                    }
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            handleSearch();
                        }
                    }}
                    autoComplete="off"
                    className="
                        w-full rounded-lg border border-gray-300
                        px-3 py-2 outline-none
                        focus:ring-2 focus:ring-emerald-400
                    "
                />

                <button
                    type="button"
                    onClick={handleSearch}
                    className="
                        rounded-lg border border-gray-300
                        bg-white px-3 py-2
                        transition-colors hover:bg-gray-100
                    "
                    aria-label="جست‌وجوی دسته‌بندی"
                >
                    🔎
                </button>

                {isError && parsedError?.message && (
                    <p className="text-sm text-rose-500 text-center mt-2">
                        {parsedError.message}
                    </p>
                )}
            </div>

            <div className="h-52 overflow-y-auto">
                {isLoading ? (
                    <p className="py-4 text-center text-sm text-gray-500">
                        در حال بارگذاری...
                    </p>
                ) : categories && categories.length > 0 ? (
                    <div className="grid grid-cols-2 gap-1.5">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() =>
                                    handleCategorySelect(category.id)
                                }
                                className={`
                                    rounded-md px-3 py-2 text-right
                                    transition-colors
                                    ${category.id === selectedId
                                        ? "bg-emerald-200 text-emerald-900"
                                        : "bg-white hover:bg-emerald-50"
                                    }
                                `}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className="py-4 text-center text-sm text-gray-500">
                        دسته‌بندی‌ای پیدا نشد.
                    </p>
                )}
            </div>
        </div>
    );
}