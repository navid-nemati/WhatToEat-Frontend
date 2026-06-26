import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { UpdateCategoryFormData, UpdateCategorySchema } from "../schemas/UpdateCategory.schema";
import useUpdateCategory from "../hooks/useUpdateCategory";
import { parseApiError } from "@/utils/apiError";
import Modal from "@/shared/components/modal";

interface UpdateCategoryModalProps {
    isOpen: boolean
    onClose: () => void
    categoryId: string
}

export default function UpdateCategoryModal({ isOpen, onClose, categoryId }: UpdateCategoryModalProps) {

    const { mutate, isPending, isError, error } = useUpdateCategory()

    const parsedError = isError ? parseApiError(error) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateCategoryFormData>({
        resolver: zodResolver(UpdateCategorySchema),
    })

    const onSubmit = (data: UpdateCategoryFormData) => {
        console.log("Form submitted:", data);
        console.log("ID:", categoryId);

        if (!categoryId) {
            console.error("ID is undefined!");
            return;
        }

        mutate({ id: categoryId, name: data.name }, {
            onSuccess: () => {
                reset();
                onClose();
            },
            onError: (err: any) => {
                console.error("Mutation Error:", err);
            }
        });


    }

    if (!isOpen) return null;

    return (
        // <div
        //     className="absolute flex items-center justify-center inset-0 
        //                     z-40 bg-black/50">
        //     <div className="bg-white rounded-lg w-96 z-50
        //                     border border-gray-400 shadow-md
        //                     py-8 px-10">

        //         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4
        //                         items-center">
        //             <span className="text-xl">ویرایش دسته بندی</span>
        //             <TextField style={{ width: "100%" }} size="small"
        //                 placeholder="نام دسته بندی"
        //                 variant="outlined"
        //                 {...register("name")}
        //                 error={!!parsedError?.fieldErrors?.Name}
        //                 helperText={!!parsedError?.fieldErrors?.Name?.[0]}
        //             />
        //             {errors.name && (
        //                 <p className="text-red-400">{errors.name.message}</p>
        //             )}
        //             <div className="flex items-center gap-2 w-full">
        //                 <button
        //                     type="submit"
        //                     disabled={isSubmitting || isPending}
        //                     className="bg-blue-400 text-white px-4 py-1.5 
        //                                 rounded-lg transition-all duration-200 hover:scale-105
        //                                 shadow-md hover:shadow-xl"
        //                 >

        //                     {isSubmitting || isPending ? "در حال ارسال..." : "ثبت"}
        //                 </button>

        //                 <button
        //                     type="button"
        //                     onClick={onClose}
        //                     className="bg-red-500 text-white px-3 py-1.5 rounded-lg
        //                                         transition-all duration-200 hover:scale-105
        //                                         shadow-md hover:shadow-xl"
        //                 >انصراف
        //                 </button>
        //             </div>

        //             {isError && (
        //                 <p className="text-sm text-red-500 text-center">
        //                     {(error as Error).message}
        //                 </p>
        //             )}

        //             {parsedError?.message && (
        //                 <p className="text-sm text-red-500 text-center">
        //                     {parsedError.message}
        //                 </p>
        //             )}
        //         </form>


        //     </div>
        // </div>
        <div>

            <Modal isOpen={isOpen}>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4
                                items-center">
                    <span className="text-xl">ویرایش دسته بندی</span>
                    <TextField style={{ width: "100%" }} size="small"
                        placeholder="نام دسته بندی"
                        variant="outlined"
                        {...register("name")}
                        error={!!parsedError?.fieldErrors?.Name}
                        helperText={!!parsedError?.fieldErrors?.Name?.[0]}
                    />
                    {errors.name && (
                        <p className="text-red-400">{errors.name.message}</p>
                    )}
                    <div className="flex items-center gap-2 w-full">
                        <button
                            type="submit"
                            disabled={isSubmitting || isPending}
                            className="bg-blue-400 text-white px-4 py-1.5 
                                        rounded-lg transition-all duration-200 hover:scale-105
                                        shadow-md hover:shadow-xl"
                        >

                            {isSubmitting || isPending ? "در حال ارسال..." : "ثبت"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-red-500 text-white px-3 py-1.5 rounded-lg
                                                transition-all duration-200 hover:scale-105
                                                shadow-md hover:shadow-xl"
                        >انصراف
                        </button>
                    </div>

                    {isError && (
                        <p className="text-sm text-red-500 text-center">
                            {(error as Error).message}
                        </p>
                    )}

                    {parsedError?.message && (
                        <p className="text-sm text-red-500 text-center">
                            {parsedError.message}
                        </p>
                    )}
                </form>
                
            </Modal>
        </div>
    );
}