import Container from "@/components/container";
import Link from "next/link";

export default function AdminPanel() {

    const navItems = [
        {
            title: "مدیریت مواد اولیه",
            link: "/admin/ingredients",
        },
        {
            title: "مدیریت غذاها",
            link: "/admin/foods",
        },
        {
            title: "مدیریت دسته‌بندی ها",
            link: "/admin/categories",
        },
    ]

    return (
        <div>
            <Container>
                <div className="flex items-center gap-5 pt-30">
                    {/* <Link href={'/admin/ingredients'} className="bg-emerald-200
                    rounded-lg px-3 py-2 shadow-sm transition-all duration-200
                    hover:scale-105 hover:shadow-lg text-shadow-sm
                    ring ring-emerald-300">
                        مدیریت مواد اولیه
                    </Link>

                    <Link href={'/admin/foods'} className="bg-emerald-200
                    rounded-lg px-3 py-2 shadow-sm transition-all duration-200
                    hover:scale-105 hover:shadow-lg text-shadow-sm
                    ring ring-emerald-300">
                        مدیریت غذاها
                    </Link>

                    <Link href={'/admin/foods'} className="bg-emerald-200
                    rounded-lg px-3 py-2 shadow-sm transition-all duration-200
                    hover:scale-105 hover:shadow-lg text-shadow-sm
                    ring ring-emerald-300">
                        مدیریت غذاها
                    </Link> */}
                    {navItems.map((item, index) => (
                        <Link
                        key={index}
                            className="bg-emerald-200
                    rounded-lg px-3 py-2 shadow-sm transition-all duration-200
                    hover:scale-105 hover:shadow-lg text-shadow-sm
                    ring ring-emerald-300 hover:ring-2"
                            href={`${item.link}`}>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    )
}