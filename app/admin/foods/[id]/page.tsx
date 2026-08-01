"use client"

import { useState } from "react";
import { useParams } from "next/navigation";
import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";
import useGetFoodDetail from "@/features/foods/hooks/useGetFoodDetail";
import FoodInfoCard from "@/features/foods/components/FoodInfoCard";
import EditFood from "@/features/foods/components/editFood";
import HandleIngredientOfFood from "@/features/ingredientsOfFoods/components/handleIngredientOfFood";
import Modal from "@/shared/components/modal";
import CreateIngredientOfFoodModal from "@/features/ingredientsOfFoods/components/CreateIngredientOfFood";

export default function AdminFoodDetail() {
    const { id } = useParams<{ id: string }>();

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    const {
        data: food,
        isLoading: foodIsLoading,
        isError: foodIsError,
        error: foodError,
    } = useGetFoodDetail(id);


    if (foodIsLoading) {
        return <LoadingComponent />;
    }

    if (foodIsError) {
        return (
            <div className="flex items-center justify-center p-10 font-bold text-red-500">
                {(foodError as Error).message}
            </div>
        );
    }

    if (!food) {
        return (
            <div className="p-10 text-center text-gray-500">
                اطلاعات غذا پیدا نشد.
            </div>
        );
    }

    return (
        <Container>
            <div className="flex flex-col gap-6 pt-30">
                {/* اطلاعات فعلی غذا */}
                <FoodInfoCard food={food} />

                {/* فرم ویرایش اطلاعات غذا */}
                <EditFood food={food} />

                {/* بخش مواد اولیه */}
                <section className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                    <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                مواد اولیه
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                مواد اولیه و مقدار مورد نیاز این غذا را مدیریت
                                کنید.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsCreateModalOpen(true)}
                            className="rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                        >
                            + افزودن ماده اولیه
                        </button>
                    </div>
                    <HandleIngredientOfFood foodId={id} />

                </section>

                <Modal
                    open={isCreateModalOpen}
                    onOpenChange={setIsCreateModalOpen}
                    title="افزدون ماده اولیه"
                    size="xs">
                    <CreateIngredientOfFoodModal
                        foodId={id}
                        onSuccess={() => setIsCreateModalOpen(false)} />
                </Modal>
            </div>
        </Container>
    );
}