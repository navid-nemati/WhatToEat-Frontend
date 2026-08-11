import useCreateIngredient from "@/features/ingredients/hooks/useCreateIngredient";
import { CreateIngredientFormData, CreateIngredientSchema } from "@/features/ingredients/schemas/CreateIngredient.schemas";
import AppToast from "@/lib/toast";
import { parseApiError } from "@/utils/apiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function CreateIngredientComponent() {

    const { mutate, isPending, isError, error } = useCreateIngredient()
    const parsedError = isError ? parseApiError(error) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<CreateIngredientFormData>({
        resolver: zodResolver(CreateIngredientSchema)
    })

    const onSubmit = (data: CreateIngredientFormData) => {
        mutate(data, {
            onSuccess: () => {
                reset();
                AppToast.success("ماده اولیه با موفقیت اضافه شد")
            },
            onError: (mutationError: any) => {
                //AppToast.error(mutationError.message)
                
                const parsed = parseApiError(mutationError);

                AppToast.error(
                    parsed.message ?? "خطایی رخ داد"
                );
            }
        });
    }

    return (
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
            <div className="mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                <h2 className="text-lg font-bold text-slate-800">افزودن ماده اولیه</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="relative">
                <input
                    type="text"
                    placeholder="مثال: برنج"
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
                    {isPending || isSubmitting ? " در حال ثبت..." : "افزودن ماده‌اولیه"}
                </button>
            </form>

            {isError && parsedError?.message && (
                <p className="text-sm text-rose-500 mt-2">
                    {parsedError.message}
                </p>
            )}

            {errors.name && (
                <p className="text-sm text-red-500 mt-2">
                    {errors.name.message}
                </p>
            )}

        </div>
    )
}