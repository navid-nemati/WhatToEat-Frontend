import Modal from "@/shared/components/modal";
import UseDeleteIngredientOfFood from "../hooks/useDeleteIngredientOfFood";
import { IIngredientsOfFoodDto } from "../types/IngredientOfFood";
import EditIngredientOfFoodModal from "./editINgredientOfFood";
import { useState } from "react";

interface Props {
    data: IIngredientsOfFoodDto
}

export default function IngredientOfFoodItem({ data }: Props) {

    const {
        mutate: deleteIngredient,
        isPending: deleteIsPending,
    } = UseDeleteIngredientOfFood();

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const handleDeleteIngredient = (ingredientOfFoodId: string) => {
        const confirmed = window.confirm(
            "آیا از حذف این ماده اولیه مطمئن هستید؟"
        );

        if (!confirmed) {
            return;
        }

        deleteIngredient(ingredientOfFoodId, {
            onSuccess: () => {
                alert("ماده اولیه با موفقیت حذف شد");
            },

            onError: (error: unknown) => {
                console.error("Delete ingredient error:", error);
            },
        });
    };

    return (
        <div className="w-full flex items-center justify-between gap-3 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
            <div className="flex justify-between gap-3">
                <span>{data.ingredientName}</span>
                <span>:</span>
                <span>{data.value}</span>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="flex-1 px-3 py-2 text-sm rounded-md bg-amber-50 text-amber-600 ring-1 ring-amber-200 hover:bg-amber-100 transition-all">
                    ویرایش
                </button>
                <button
                    className="flex-1 px-3 py-2 text-sm rounded-md bg-red-50 text-red-600 ring-1 ring-red-200 hover:bg-red-100 transition-all disabled:opacity-50"
                    onClick={() => handleDeleteIngredient(data.id)}>
                    حذف
                </button>
            </div>

            <Modal
                open={isEditModalOpen}
                onOpenChange={setIsEditModalOpen}
                title="ویرایش ماده اولیه"
                size="xs">
                <EditIngredientOfFoodModal
                    ingredientOfFoodData={data}
                    ingredientOfFoodId={data.ingredientId}
                    onSuccess={() => setIsEditModalOpen(false)} />
            </Modal>
        </div>
    )

}