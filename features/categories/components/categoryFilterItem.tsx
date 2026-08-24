import Link from "next/link"

interface Props {
    id: string
    name: string
}

export default function CategoryFilterItem({ id, name }: Props) {
    return (
        <Link href={`food?categoryId=${id}`} className="p-6 rounded-xl bg-emerald-400/20 backdrop-blur-sm shadow-lg transition-all duration-200 hover:scale-140 hover:z-10">
            <span className="text-xl text-nowrap">
                {name}
            </span>
        </Link>
    )
}