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
                //AppToast.error(err.message);

                const parsed = parseApiError(err);

                AppToast.error(
                    parsed.message ?? "خطایی رخ داد"
                );
            }
        });
    };

    return (
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
            <div className="mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                <h2 className="text-lg font-bold text-slate-800">افزودن دسته بندی جدید</h2>
            </div>

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

            {isError && parsedError?.message && (
                <p className="text-sm text-rose-500 text-center mt-2">
                    {parsedError.message}
                </p>
            )}

            {/* {isError && (
                <p className="text-sm text-red-500 text-center mt-2">
                    {(error as Error).message}
                </p>
            )} */}

            {errors.name && (
                <p className="text-sm text-red-500 mt-2">
                    {errors.name.message}
                </p>
            )}

        </div>
    );
}