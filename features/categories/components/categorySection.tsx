'use client'

import Container from "@/shared/components/container";
import Link from "next/link";
import useGetAllCategories from "../hooks/useGetAllCategories";
import LoadingComponent from "@/shared/components/loading";
import { parseApiError } from "@/utils/apiError";
import { ArrowLeft } from "lucide-react"

export default function CategorySection() {

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetAllCategories()

    const parsedError = isError ? parseApiError(error) : null;

    if (isLoading) {
        return <LoadingComponent />;
    }

    if (isError && parsedError?.message) {
        return (
            <div className="flex items-center justify-center py-20">
                <p className="rounded-xl bg-red-50 p-4 text-center text-red-500 ring-1 ring-red-200">
                    {parsedError?.message}
                </p>
            </div>
        );
    }

    const categories = data?.slice(0, 8) ?? [];

    const categoryStyles = [
        {
            bgImage: '/categoryBg4.webp',
            color: 'text-white',
            bgColor: 'bg-[#00B16B]',
        },
        {
            bgImage: '/categoryBg3.webp',
            color: 'text-white',
            bgColor: 'bg-[#10B981]',
        },
        {
            bgImage: '/categoryBg3.webp',
            color: 'text-white',
            bgColor: 'bg-[#059669]',
        },
        {
            bgImage: '/categoryBg1.webp',
            color: 'text-white',
            bgColor: 'bg-[#FBBF24]',
        },
        {
            bgImage: '/categoryBg3.webp',
            color: 'text-white',
            bgColor: 'bg-[#F59E0B]',
        },
        {
            bgImage: '/categoryBg1.webp',
            color: 'text-white',
            bgColor: 'bg-[#34D399]',
        },
        {
            bgImage: '/categoryBg4.webp',
            color: 'text-white',
            bgColor: 'bg-[#FBBF24]',
        },
        {
            bgImage: '/categoryBg3.webp',
            color: 'text-white',
            bgColor: 'bg-[#047857]',
        },
    ]

    return (
        <section className="pt-10 pb-10">
            <Container>
                <div className="flex items-center">
                    <img src="/carrot.webp" className="size-10 md:size-12" />
                    <span className="text-xl md:text-3xl text-emerald-950 
                    text-shadow-md">دسته بندی ها</span>
                </div>

                <div className="categorySection mt-6 mb-3 w-full grid grid-cols-3 md:grid-cols-4 gap-2.5 md:gap-4 overflow-x-auto pb-5 [&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1">
                    {categories.map((category, index) => {

                        const style = categoryStyles[index % categoryStyles.length];
                        return (
                            <Link
                                key={category.id}
                                href={`/food?categoryId=${category.id}`}
                                className={`
        relative overflow-hidden
        min-h-20 md:min-h-30 lg:min-h-36
        rounded-xl
        ${style?.bgColor ?? 'bg-emerald-500'}
        flex items-center justify-center
        active:scale-90 group`}
                            >
                                {/* بک‌گراند کم‌رنگ */}
                                <img
                                    src={style?.bgImage}
                                    alt=""
                                    className="
            absolute inset-0
            w-full h-full
            object-cover
            opacity-20
        "
                                />

                                {/* محتوای کارت */}
                                <span className={`relative z-10 text-sm md:text-xl lg:text-2xl text-shadow-md 
                                backdrop-blur-xs px-2 py-1 rounded-lg ${style?.color ?? 'text-white'}
                                transition-all duration-200 group-hover:bg-white/30`}>
                                    {category.name}
                                </span>
                            </Link>
                        )

                    })}
                </div>

                <Link
                    href={'/category'}
                    className="text-xl text-emerald-950 text-shadow-md
                    flex items-center gap-3 group relative overflow-hidden pr-2 pb-1">

                    <span>همه دسته بندی ها</span>
                    <ArrowLeft size={20} className="transition-all duration-200 
                    group-hover:-translate-x-2 group-hover:text-emerald-600"/>
                    <span className="absolute right-0 bottom-0 w-0 h-0.5
                        bg-emerald-600 rounded-full
                        transition-all duration-200 group-hover:w-40"></span>

                    <span className="absolute right-0 bottom-0 w-0.5 h-0
                        bg-emerald-600 rounded-full
                        transition-all duration-500 group-hover:h-10"></span>
                </Link>
            </Container>

        </section>
    )
}



{/* <Link
                        href={''}
                        className="
                            relative
                            p-3
                            bg-[url('/blob2.svg')]
                            bg-contain
                            bg-center
                            bg-no-repeat
                            flex items-center justify-center
                        ">
                        <span className="text-white text-xl text-shadow-md">چلو خورشت</span>

                    </Link> */}
