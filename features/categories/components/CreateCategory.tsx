// import useCreateCategory from "@/features/categories/hooks/useCreateCategory";
// import { parseApiError } from "@/utils/apiError";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { TextField } from "@mui/material";
// import { useForm } from "react-hook-form";
// import { CreateCategoryFormData, CreateCategorySchema } from "../schemas/CreateCategory.schema";
// import AppToast from "@/lib/toast";

// export default function CreateCategoryComponent() {

//     const { mutate, isPending, isError, error } = useCreateCategory()
//     const parsedError = isError ? parseApiError(error) : null;

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//         reset
//     } = useForm<CreateCategoryFormData>({
//         resolver: zodResolver(CreateCategorySchema)
//     })

//     const onSubmit = (data: CreateCategoryFormData) => {
//         mutate(data, {
//             onSuccess: () => {
//                 reset();
//                 //alert("چشمت روشن دسته بندی اضافه شد")
//                 AppToast.success("چشمت روشن دسته بندی اضافه شد")
//             },
//             onError: (err: any) => {
//                 console.error("Mutation Erroraaaaaaaa:", err);
//                 AppToast.error(err.message)
//             }
//         });
//     }

//     return (
//         <div className="p-5 bg-emerald-100 border border-emerald-200 rounded-lg">
//             <div className="mb-3">
//                 <span className="text-lg">افزودن دسته بندی</span>
//             </div>
//             <form onSubmit={handleSubmit(onSubmit)} className="flex items-start gap-2">
//                 <div className="flex flex-col">
//                     <TextField size="small"
//                         placeholder="نام دسته بندی"
//                         variant="outlined"
//                         {...register("name")}
//                         error={!!error?.message}
//                         helperText={errors.name?.message || parsedError?.fieldErrors?.Name?.[0]}
//                     />

//                     {isError && (
//                         <p className="text-sm text-red-500 text-center">
//                             {(error as Error).message}
//                         </p>
//                     )}
//                 </div>

//                 <button
//                     type="submit"
//                     disabled={isPending || isSubmitting}
//                     className="bg-sky-300 px-3 py-2 rounded-md text-white
//                     text-shadow-sm transition-all duration-200 hover:scale-105
//                     hover:shadow-md">
//                     {isPending || isSubmitting ? "اندکی تأمل" : "افزودن"}
//                 </button>
//             </form>
//         </div>
//     )
// }

import useCreateCategory from "@/features/categories/hooks/useCreateCategory";
import { parseApiError } from "@/utils/apiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { CreateCategoryFormData, CreateCategorySchema } from "../schemas/CreateCategory.schema";
import AppToast from "@/lib/toast";

export default function CreateCategoryComponent() {
    const { mutate, isPending, isError, error } = useCreateCategory();
    const parsedError = isError ? parseApiError(error) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<CreateCategoryFormData>({
        resolver: zodResolver(CreateCategorySchema)
    });

    const onSubmit = (data: CreateCategoryFormData) => {
        mutate(data, {
            onSuccess: () => {
                reset();
                AppToast.success("چشمت روشن دسته بندی اضافه شد");
            },
            onError: (err: any) => {
                console.error("Mutation Error:", err);
                AppToast.error(err.message);
            }
        });
    };

    return (
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
            <div className="mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                <h2 className="text-lg font-bold text-slate-800">افزودن دسته بندی جدید</h2>
            </div>

            {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row sm:items-start gap-2">
                <div className="flex-1 w-full">
                    <TextField
                        size="medium"
                        fullWidth
                        placeholder="مثال: آش"
                        variant="outlined"
                        {...register("name")}
                        error={!!errors.name || !!parsedError?.fieldErrors?.Name}
                        helperText={errors.name?.message || parsedError?.fieldErrors?.Name?.[0] || "نام دسته‌بندی را وارد کنید"}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '0.5rem',
                                backgroundColor: '#f8fafc'
                            }
                        }}
                    />

                    {isError && (
                        <p className="text-sm text-red-500 text-center">
                            {(error as Error).message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isPending || isSubmitting}
                    className="bg-emerald-600 px-6 py-3 rounded-lg text-white font-medium
                    transition-all duration-200 hover:bg-emerald-700 hover:shadow-lg 
                    hover:shadow-emerald-200 disabled:bg-slate-400 disabled:cursor-not-allowed
                    flex items-center justify-center gap-2 whitespace-nowrap h-[56px]"
                >
                    {isPending || isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            در حال ثبت...
                        </>
                    ) : "افزودن دسته"}
                </button>
            </form> */}


            <form onSubmit={handleSubmit(onSubmit)} className="relative">
                <input
                    type="text"
                    placeholder="مثال: آش"
                    className="w-full pr-4 pl-32 py-3 bg-slate-50 border border-slate-200 rounded-xl 
                                focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white 
                                transition-all duration-200"
                    {...register("name")}
                />

                <button
                    type="submit"
                    disabled={isPending || isSubmitting}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-emerald-600 px-4 py-2 rounded-lg 
                                text-white text-sm font-medium transition-all hover:bg-emerald-700 hover:shadow-md"
                >
                    {isPending || isSubmitting ? " در حال ثبت..." : "افزودن دسته"}
                </button>
            </form>

            {isError && (
                <p className="text-sm text-red-500 text-center mt-2">
                    {(error as Error).message}
                </p>
            )}

            {errors.name && (
                    <p className="text-sm text-red-500 mt-2">
                        {errors.name.message}
                    </p>
                )}

        </div>
    );
}