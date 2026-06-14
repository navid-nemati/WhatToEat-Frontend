import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { parseApiError } from "@/utils/apiError";
import { UpdateIngredientItemFormData, UpdateIngredientItemSchema } from "../schemas/UpdateIngredientItem.schema";
import useUpdateIngredient from "../hooks/useUpdateIngredient";

interface UpdateIngredientModalProps {
    isOpen: boolean
    onClose: () => void
    ingredientId: string
}

export default function UpdateIngredientModal({ isOpen, onClose, ingredientId }: UpdateIngredientModalProps) {

    const { mutate, isPending, isError, error } = useUpdateIngredient()

    const parsedError = isError ? parseApiError(error) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateIngredientItemFormData>({
        resolver: zodResolver(UpdateIngredientItemSchema),
    })

    const onSubmit = (data: UpdateIngredientItemFormData) => {

        if (!ingredientId) {
            console.error("ID is undefined!");
            return;
        }

        mutate({ id: ingredientId, name: data.name }, {
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
        <div
            className="absolute min-h-dvh flex items-center justify-center inset-0 
                            z-40 bg-black/50">
            <div className="bg-white rounded-lg w-96 z-50
                            border border-gray-400 shadow-md
                            py-8 px-10">

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4
                                items-center">
                    <span className="text-xl">ویرایش ماده اولیه</span>
                    <TextField style={{ width: "100%" }} size="small"
                        placeholder="نام ماده اولیه"
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
            </div>
        </div>
    );
}