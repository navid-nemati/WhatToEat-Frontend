import Container from "@/shared/components/container";
import AdminGetFoods from "./components/adminGetFood";

export default function AdminFoodPage() {
    return (
        <Container>
            <div className="pt-30 flex flex-col gap-4">
                <span className="text-2xl">مدیریت غذاها</span>
                <AdminGetFoods />
            </div>
        </Container>
    )
}