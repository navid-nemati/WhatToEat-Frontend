"use client"

import UpdateShoppingListItemForm from "@/features/shoppingList/components/updateShoppingListItem";
import UseDeleteShoppingListItem from "@/features/shoppingList/hooks/useDeleteShoppingList";
// import useGetShoppingList from "@/features/shoppingList/hooks/useGetShoppingList";
// import Container from "@/shared/components/container";
// import ProtectedRoute from "@/shared/components/ProtectedRoute";

// export default function ShoppingList() {

//     const {
//         data,
//         isLoading,
//         isError,
//         error,
//     } = useGetShoppingList();

//     return (
//         <ProtectedRoute>
//             <Container>
//                 <div className="pt-21 md:pt-30">
//                     <h3>لیست خرید</h3>
//                     {error?.message}
//                     {data?.map((s) => (
//                         <div className="flex items-center w-full justify-between">
//                             <div>{s.foodName}</div>
//                             <div>{s.ingredientName}</div>
//                             <div>{s.value}</div>
//                             <div>{s.isPurchased}</div>
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </ProtectedRoute>
//     )
// }

import useGetShoppingList from "@/features/shoppingList/hooks/useGetShoppingList";
import useUpdateShoppingListItem from "@/features/shoppingList/hooks/useUpdateShoppingList";
import { ShoppingListDto } from "@/features/shoppingList/types/ShoppingList";
import AppToast from "@/lib/toast";
import Container from "@/shared/components/container";
import Modal from "@/shared/components/modal";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import { Pencil, Trash2, CheckCircle, Circle } from "lucide-react";
import { useState } from "react";
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

export default function ShoppingList() {
    const { data,
        isLoading,
        isError,
        error
    } = useGetShoppingList();

    const {
        mutate: updateItemMutate
    } = useUpdateShoppingListItem();

    const {
        mutate: deleteItem,
        isPending: deleteIsPending
    } = UseDeleteShoppingListItem();

    const [selectedItem, setSelectedItem] =
        useState<ShoppingListDto | null>(null);

    const handleTogglePurchased = (item: ShoppingListDto) => {

        // updateItemMutate({
        //     id: item.id,
        //     dto: {
        //         value: item.value,
        //         isPurchased: !item.isPurchased
        //     }
        // });

        updateItemMutate({
            id: item.id,
            value: item.value,
            isPurchased: !item.isPurchased

        });

    }

    const handleDelete = (id: string) => {
        deleteItem(id, {
            onSuccess: () => {
                AppToast.success("آیتم حذف شد");
            },
            onError: (err) => {
                AppToast.error(err.message);
            }
        });
    };

    const handleDeleteAll = () => {
        // confirm & delete all
        console.log("Delete all items");
    };

    const handleDeletePurchased = () => {
        // confirm & delete purchased items
        console.log("Delete purchased items");
    };
    // -----------------------------------------------------------

    return (
        <ProtectedRoute>
            <Container>
                <div className="pt-21 md:pt-30 pb-10">
                    {/* Header & Global Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                        <h3 className="text-2xl font-bold text-emerald-800">لیست خرید</h3>

                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={handleDeleteAll}
                                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                            >
                                <Trash2 size={16} />
                                حذف همه مواد
                            </button>
                            <button
                                onClick={handleDeletePurchased}
                                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                            >
                                <CheckCircle size={16} />
                                حذف مواد خریداری شده
                            </button>
                        </div>
                    </div>

                    {/* Error State */}
                    {isError && (
                        <div className="p-4 mb-4 text-red-700 bg-red-50 rounded-lg border border-red-200">
                            {error?.message || "خطایی رخ داده است"}
                        </div>
                    )}

                    {/* Loading State */}
                    {isLoading && (
                        <div className="text-center py-10 text-gray-500">در حال بارگذاری...</div>
                    )}

                    {/* Empty State */}
                    {!isLoading && !isError && data?.length === 0 && (
                        <div className="text-center py-10 text-gray-400">
                            لیست خرید شما خالی است
                        </div>
                    )}

                    {/* Data Table / Cards */}
                    {!isLoading && data && data.length > 0 && (
                        <>
                            {/* Desktop Table (hidden on small screens) */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
                                    <thead>
                                        <tr className="bg-emerald-100 text-emerald-900 text-sm">
                                            <th className="py-3 px-4 text-right font-semibold">نام غذا</th>
                                            <th className="py-3 px-4 text-right font-semibold">ماده اولیه</th>
                                            <th className="py-3 px-4 text-right font-semibold">مقدار</th>
                                            <th className="py-3 px-4 text-center font-semibold">وضعیت</th>
                                            <th className="py-3 px-4 text-center font-semibold">عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {data.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-emerald-50/50 transition-colors"
                                            >
                                                <td className="py-3 px-4 text-right font-medium text-gray-800">
                                                    {item.foodName}
                                                </td>
                                                <td className="py-3 px-4 text-right text-gray-700">
                                                    {item.ingredientName}
                                                </td>
                                                <td className="py-3 px-4 text-right text-gray-700">
                                                    {item.value}
                                                </td>
                                                <td className="py-3 px-4 text-center">
                                                    {/* {item.isPurchased ? (
                                                        <span className="inline-flex items-center gap-1 text-emerald-600">
                                                            <CheckCircle size={18} />
                                                            <span className="text-xs hidden lg:inline">خریداری شده</span>
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 text-gray-400">
                                                            <Circle size={18} />
                                                            <span className="text-xs hidden lg:inline">خرید نشده</span>
                                                        </span>
                                                    )} */}

                                                    <button
                                                        onClick={() => handleTogglePurchased(item)}

                                                    >
                                                        {item.isPurchased ? (
                                                            <span className="inline-flex items-center gap-1 text-emerald-600">
                                                                <CheckCircle className="transition hover:scale-115" size={18} />
                                                                <span className="text-xs hidden lg:inline">خریداری شده</span>
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center gap-1 text-gray-400">
                                                                <Circle className="transition hover:scale-115" size={18} />
                                                                <span className="text-xs hidden lg:inline">خرید نشده</span>
                                                            </span>
                                                        )}
                                                    </button>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <button
                                                            onClick={() => setSelectedItem(item)}
                                                            className="p-1.5 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors"
                                                            title="ویرایش"
                                                        >
                                                            <Pencil size={18} />
                                                        </button>
                                                        {/* <button
                                                            onClick={() => handleDelete(item.id)}
                                                            className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                                            title="حذف"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button> */}
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                <button
                                                                    className="p-1.5 text-gray-500 hover:text-red-600
            hover:bg-red-50 rounded-md transition-colors"
                                                                >
                                                                    <Trash2 size={18} />
                                                                </button>
                                                            </AlertDialogTrigger>

                                                            <AlertDialogContent dir="rtl">
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>
                                                                        حذف ماده اولیه
                                                                    </AlertDialogTitle>

                                                                    <AlertDialogDescription>
                                                                        آیا مطمئنی می‌خواهی این ماده را از لیست خرید حذف کنی؟
                                                                        این عملیات قابل بازگشت نیست.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>

                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>
                                                                        انصراف
                                                                    </AlertDialogCancel>

                                                                    <AlertDialogAction
                                                                        disabled={deleteIsPending}
                                                                        onClick={() => handleDelete(item.id)}
                                                                    >
                                                                        {deleteIsPending ? "در حال حذف..." : "حذف"}
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </div>
                                                </td>
                                                {/* <Modal
                                                    open={editModalOpen}
                                                    onOpenChange={setEditModalOpen}
                                                    title="ویرایش مقدار ماده اولیه"
                                                    size="xs">
                                                    <UpdateShoppingListItemForm
                                                        id={item.id}
                                                        value={item.value}
                                                        onSuccess={() => setEditModalOpen(false)}
                                                    />
                                                </Modal> */}
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards (visible on small screens) */}
                            <div className="md:hidden space-y-3">
                                {data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 space-y-2"
                                    >
                                        {/* Food name & purchase status */}
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-semibold text-emerald-800 text-base">
                                                {item.foodName}
                                            </h4>
                                            {/* <span
                                                className={`inline-flex items-center gap-1 text-sm ${item.isPurchased
                                                    ? "text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
                                                    : "text-gray-400"
                                                    }`}
                                            >
                                                {item.isPurchased ? (
                                                    <CheckCircle size={16} />
                                                ) : (
                                                    <Circle size={16} />
                                                )}
                                                {item.isPurchased ? "خریداری شده" : "خرید نشده"}
                                            </span> */}
                                            <button
                                                onClick={() => handleTogglePurchased(item)}
                                                className="inline-flex items-center gap-1"
                                            >
                                                {item.isPurchased ? (
                                                    <CheckCircle size={16} />
                                                ) : (
                                                    <Circle size={16} />
                                                )}

                                                {item.isPurchased ? "خریداری شده" : "خرید نشده"}
                                            </button>
                                        </div>

                                        {/* Ingredient details */}
                                        <div className="grid grid-cols-2 text-sm text-gray-600">
                                            <div>
                                                <span className="text-gray-400">ماده اولیه:</span>{" "}
                                                <span className="font-medium">{item.ingredientName}</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-400">مقدار:</span>{" "}
                                                <span className="font-medium">{item.value}</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex justify-end gap-1 pt-1 border-t border-gray-50">
                                            <button
                                                onClick={() => setSelectedItem(item)}
                                                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-md hover:bg-emerald-100"
                                            >
                                                <Pencil size={14} />
                                                ویرایش
                                            </button>
                                            {/* <button
                                                onClick={() => handleDelete(item.id)}
                                                className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100"
                                            >
                                                <Trash2 size={14} />
                                                حذف
                                            </button> */}
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <button
                                                        className="p-1.5 text-gray-500 hover:text-red-600
            hover:bg-red-50 rounded-md transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </AlertDialogTrigger>

                                                <AlertDialogContent dir="rtl">
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>
                                                            حذف ماده اولیه
                                                        </AlertDialogTitle>

                                                        <AlertDialogDescription>
                                                            آیا مطمئنی می‌خواهی این ماده را از لیست خرید حذف کنی؟
                                                            این عملیات قابل بازگشت نیست.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>

                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>
                                                            انصراف
                                                        </AlertDialogCancel>

                                                        <AlertDialogAction
                                                            disabled={deleteIsPending}
                                                            onClick={() => handleDelete(item.id)}
                                                        >
                                                            {deleteIsPending ? "در حال حذف..." : "حذف"}
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {selectedItem && (
                        <Modal
                            open={true}
                            onOpenChange={(open) => {
                                if (!open)
                                    setSelectedItem(null);
                            }}
                            title="ویرایش مقدار ماده اولیه"
                            size="xs"
                        >
                            <UpdateShoppingListItemForm
                                id={selectedItem.id}
                                value={selectedItem.value}
                                onSuccess={() => setSelectedItem(null)}
                            />
                        </Modal>
                    )}
                </div>
            </Container>
        </ProtectedRoute>
    );
}