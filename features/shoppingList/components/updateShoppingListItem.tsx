import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import { parseApiError } from "@/utils/apiError";
import AppToast from "@/lib/toast";
import useUpdateShoppingListItem from "../hooks/useUpdateShoppingList";
import { UpdateShoppingListItemFormData, UpdateShoppingListItemSchema } from "../schemas/updateShoppingListItem.schema";

interface Props {
    id: string;
    value: string
    onSuccess: () => void;
}

export default function UpdateShoppingListItemForm({
    id,
    value,
    onSuccess,
}: Props) {

    const { mutate, 
        isPending, 
        isError, 
        error 
    } = useUpdateShoppingListItem();

    const parsedError = isError
        ? parseApiError(error)
        : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateShoppingListItemFormData>({
        resolver: zodResolver(UpdateShoppingListItemSchema),
        defaultValues: {
            value: value
        }
    });

    const onSubmit = (data: UpdateShoppingListItemFormData) => {

        mutate(
            {
                id: id,
                value: data.value,
            },
            {
                onSuccess: () => {
                    reset();
                    onSuccess();
                    AppToast.success("به روزرسانی با موفقیت انجام شد")
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
                placeholder="مقدار"
                {...register("value")}
                error={!!parsedError?.fieldErrors?.Name}
                helperText={parsedError?.fieldErrors?.Name?.[0]}
            />

            {errors.value && (
                <p className="text-red-500">
                    {errors.value.message}
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