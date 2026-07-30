import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import {
    UpdateCategoryFormData,
    UpdateCategorySchema,
} from "../schemas/UpdateCategory.schema";

import useUpdateCategory from "../hooks/useUpdateCategory";
import { parseApiError } from "@/utils/apiError";

interface Props {
    categoryName: string
    categoryId: string;
    onSuccess: () => void;
}

export default function UpdateCategoryForm({
    categoryName,
    categoryId,
    onSuccess,
}: Props) {

    const { mutate, isPending, isError, error } = useUpdateCategory();

    const parsedError = isError
        ? parseApiError(error)
        : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateCategoryFormData>({
        resolver: zodResolver(UpdateCategorySchema),
        defaultValues: {
            name: categoryName
        }
    });

    const onSubmit = (data: UpdateCategoryFormData) => {

        mutate(
            {
                id: categoryId,
                name: data.name,
            },
            {
                onSuccess: () => {
                    reset();
                    onSuccess();
                },
            }
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
        >

            <TextField
                size="small"
                placeholder="نام دسته بندی"
                {...register("name")}
                error={!!parsedError?.fieldErrors?.Name}
                helperText={parsedError?.fieldErrors?.Name?.[0]}
            />

            {errors.name && (
                <p className="text-red-500">
                    {errors.name.message}
                </p>
            )}

            <button
                disabled={isPending || isSubmitting}
                className="bg-emerald-500 text-white rounded-md py-2 transition-all duration-200 ease-out hover:shadow-xl hover:bg-emerald-600"
            >
                {isPending
                    ? "در حال ذخیره..."
                    : "ثبت"}
            </button>

        </form>
    );
}