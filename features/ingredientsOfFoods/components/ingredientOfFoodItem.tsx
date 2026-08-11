import Modal from "@/shared/components/modal";
import UseDeleteIngredientOfFood from "../hooks/useDeleteIngredientOfFood";
import { IIngredientsOfFoodDto } from "../types/IngredientOfFood";
import EditIngredientOfFoodModal from "./editINgredientOfFood";
import { useState } from "react";
import AppToast from "@/lib/toast";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { parseApiError } from "@/utils/apiError";

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
        deleteIngredient(ingredientOfFoodId, {
            onSuccess: () => {
                AppToast.success("ماده اولیه از غذا حذف شد")
            },

            onError: (mutationError) => {
                //AppToast.error(mutationError.message)

                const parsed = parseApiError(mutationError);

                AppToast.error(
                    parsed.message ?? "خطایی رخ داد"
                );
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
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <button
                            className="flex-1 px-3 py-2 text-sm rounded-md bg-red-50 text-red-600 ring-1 ring-red-200 hover:bg-red-100 transition-all disabled:opacity-50">
                            حذف
                        </button>
                    </AlertDialogTrigger>

                    <AlertDialogContent dir="rtl">
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                حذف غذا
                            </AlertDialogTitle>

                            <AlertDialogDescription>
                                آیا از حذف این ماده اولیه مطمئن هستید؟
                                این عملیات قابل بازگشت نیست.
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                            <AlertDialogCancel>
                                انصراف
                            </AlertDialogCancel>

                            <AlertDialogAction
                                disabled={deleteIsPending}

                                onClick={() => handleDeleteIngredient(data.id)}
                            >
                                {deleteIsPending ? "در حال حذف..." : "حذف"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
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