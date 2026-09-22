import Link from "next/link"
import { IFoodDto } from "../types/Food"
import { getFoodImageUrl } from "@/utils/image"
import { Clock, Flame } from "lucide-react"

interface props {
    food: IFoodDto
}

export default function FoodCard({food}: props) {
    return (
        <article
            className="
              group relative flex flex-col overflow-hidden rounded-3xl
              border border-slate-200/80 bg-white p-2.5
              shadow-[0_4px_20px_rgba(15,23,42,0.05)]
              transition-all duration-300 ease-out
              hover:-translate-y-1.5
              hover:border-emerald-300
              hover:shadow-[0_18px_45px_rgba(16,185,129,0.14)]
              active:scale-90
            "
        >
            {/* تصویر */}
            <Link
                href={`/food/${food.id}`}
                className="
                relative block h-35 md:h-44 w-full overflow-hidden rounded-2xl
                outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500
                focus-visible:ring-offset-2
              "
            >
                <img
                    src={getFoodImageUrl(food.imagePath)}
                    alt={food.name}
                    sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  25vw
                "
                    className="
                  absolute inset-0 h-full w-full object-cover
                  object-center
                "
                />

                {/* Category Badge */}
                <span
                    className="
                  absolute right-3 top-3
                  max-w-[calc(100%-1.5rem)]
                  truncate rounded-full
                  border border-white/20
                  bg-black/35
                  px-2 py-1
                  md:px-3 md:py-1.5
                  text-[0.7rem]
                  md:text-xs font-medium
                  text-white
                  shadow-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:bg-emerald-600/90
                "
                >
                    {food.categoryName}
                </span>
            </Link>

            {/* محتوا */}
            <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                <Link
                    href={`/food/${food.id}`}
                    className="
                  group/title
                  rounded-lg
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500
                "
                >
                    <div className="flex items-start justify-between gap-3">
                        <h3
                            className="
                      line-clamp-1
                      text-lg font-bold
                      text-slate-800
                      transition-colors
                      duration-200
                      group-hover/title:text-emerald-700
                      group-hover:text-emerald-800
                    "
                        >
                            {food.name}
                        </h3>
                    </div>
                </Link>

                {/* اطلاعات غذا */}
                <div className="mt-3 flex flex-wrap items-center gap-x-2 md:gap-x-3 gap-y-2 text-xs text-slate-500">
                    <span className="flex items-center ">
                        <Clock size={14} className="text-emerald-600 me-1" />
                        <span>{food.cookingTimeMinutes}</span>
                        <span className="mr-1">دقیقه</span>
                    </span>

                    {/* <span className="h-3 w-px bg-slate-200" />

                    <span className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                      ۴.۸
                    </span> 

                    <span className="h-3 w-px bg-slate-200" /> */}

                    {/* <span className="flex items-center gap-1">
                        <Flame size={14} className="text-orange-500" />
                        آسان
                    </span> */}
                </div>
            </div>
        </article>
    )
}