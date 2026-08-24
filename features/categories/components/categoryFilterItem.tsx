import Link from "next/link";

interface Props {
    id: string;
    name: string;
    colorIndex: number;
}

const colorVariants = [
    "bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-emerald-500/30",
    "bg-gradient-to-br from-teal-400 to-teal-600 shadow-teal-500/30",
    "bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/30",
    "bg-gradient-to-br from-lime-500 to-emerald-600 shadow-lime-500/30",
    "bg-gradient-to-br from-cyan-400 to-emerald-500 shadow-cyan-500/30",
];

export default function CategoryFilterItem({ id, name, colorIndex }: Props) {

    const colorClass = colorVariants[colorIndex % colorVariants.length];

    return (
        <Link 
            href={`/food?categoryId=${id}`} 
            className={`
                group relative flex items-center justify-center overflow-hidden
                p-6 md:p-8 rounded-2xl 
                ${colorClass}
                shadow-lg transition-all duration-300 ease-out 
                hover:-translate-y-2 hover:shadow-2xl hover:scale-105
                active:scale-95 active:shadow-md
            `}
        >
            {/* لایه درخشان برای افکت Hover */}
            <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            {/* لایه شیشه‌ای زیر متن */}
            <div className="absolute inset-2 rounded-xl bg-white/10 backdrop-blur-sm"></div>

            {/* متن دسته بندی */}
            <span className="relative z-10 text-base md:text-xl font-bold text-white text-center text-nowrap drop-shadow">
                {name}
            </span>
        </Link>
    );
}

// import Link from "next/link"

// interface Props {
//     id: string
//     name: string
// }

// export default function CategoryFilterItem({ id, name }: Props) {
//     return (
//         <Link href={`food?categoryId=${id}`} className="p-6 rounded-xl bg-emerald-400/20 backdrop-blur-sm shadow-lg transition-all duration-200 hover:scale-140 hover:z-10">
//             <span className="text-xl text-nowrap">
//                 {name}
//             </span>
//         </Link>
//     )
// }


//---------------------------------------------------------------

// import Link from "next/link";

// interface Props {
//   id: string;
//   name: string;
//   index?: number;
// }

// const palettes = [
//   {
//     gradient: "from-emerald-400/30 via-emerald-300/10 to-teal-500/20",
//     border: "border-emerald-400/40",
//     text: "text-emerald-950",
//     shadow: "shadow-emerald-500/10",
//     glow: "hover:shadow-emerald-400/30",
//   },
//   {
//     gradient: "from-teal-400/30 via-teal-300/10 to-cyan-500/20",
//     border: "border-teal-400/40",
//     text: "text-teal-950",
//     shadow: "shadow-teal-500/10",
//     glow: "hover:shadow-teal-400/30",
//   },
//   {
//     gradient: "from-cyan-400/30 via-cyan-300/10 to-sky-500/20",
//     border: "border-cyan-400/40",
//     text: "text-cyan-950",
//     shadow: "shadow-cyan-500/10",
//     glow: "hover:shadow-cyan-400/30",
//   },
//   {
//     gradient: "from-lime-400/30 via-lime-300/10 to-green-500/20",
//     border: "border-lime-400/40",
//     text: "text-lime-950",
//     shadow: "shadow-lime-500/10",
//     glow: "hover:shadow-lime-400/30",
//   },
//   {
//     gradient: "from-green-400/30 via-green-300/10 to-emerald-500/20",
//     border: "border-green-400/40",
//     text: "text-green-950",
//     shadow: "shadow-green-500/10",
//     glow: "hover:shadow-green-400/30",
//   },
//   {
//     gradient: "from-amber-400/30 via-yellow-300/10 to-orange-500/20",
//     border: "border-amber-400/40",
//     text: "text-amber-950",
//     shadow: "shadow-amber-500/10",
//     glow: "hover:shadow-amber-400/30",
//   },
// ];

// export default function CategoryFilterItem({ id, name, index = 0 }: Props) {
//   const palette = palettes[index % palettes.length];

//   return (
//     <Link
//       href={`/food?categoryId=${id}`}
//       style={{ WebkitTapHighlightColor: "transparent" }}
//       className={`group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border ${palette.border} bg-linear-to-br ${palette.gradient} p-5 shadow-lg ${palette.shadow} backdrop-blur-md transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl ${palette.glow} active:scale-95 active:shadow-md active:brightness-95`}
//     >
//       {/* متن دسته */}
//       <span className={`relative z-10 text-lg font-bold sm:text-xl ${palette.text}`}>
//         {name}
//       </span>

//       {/* آیکون جهت‌دار */}
//       <span
//         className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/40 ${palette.text} shadow-sm backdrop-blur-sm transition-transform duration-300 group-active:rotate-45`}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="currentColor"
//           className="h-5 w-5"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </span>

//       {/* افکت نور پس‌زمینه */}
//       <span className="pointer-events-none absolute -left-5 -top-5 h-20 w-20 rounded-full bg-white/20 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-white/30" />
//       <span className="pointer-events-none absolute -bottom-6 -right-4 h-16 w-16 rounded-full bg-white/10 blur-xl transition-transform duration-500 group-hover:scale-125" />
//     </Link>
//   );
// }
