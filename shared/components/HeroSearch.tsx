'use client'

import { ChefHat } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HeroSearch() {

    const [searchInput, setSearchInput] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    return (
        <div className="w-full max-w-100 md:w-100 flex flex-nowrap items-center gap-3">
            <input
            onChange={handleSearchChange}
                type="text"
                className="flex-1 ring ring-emerald-300 p-3 outline-none
                    right-round pr-4
                    focus:ring-offset-2 focus:ring-2 focus:border-emerald-400 placeholder:text-sm md:placeholder:text-md"
                placeholder="دنبال چه غذایی می‌گردی؟"
            />

            <Link
                href={`/food?search=${searchInput}`}
                className="group flex items-center gap-2 left-round bg-amber-400 px-6 py-3 text-md md:text-lg font-medium text-emerald-950 shadow-lg shadow-amber-400/30 transition-all duration-200 ring-amber-200 hover:ring-2 hover:shadow-xl hover:shadow-amber-400/40 hover:scale-105 active:scale-95 text-shadow-sm text-nowrap">
                <ChefHat size={20} className="transition-transform group-hover:rotate-12" />
                جستو
                <span className="hidden md:flex">غذا</span>
            </Link>
        </div>
    )
}