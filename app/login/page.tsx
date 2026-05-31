'use client'

import { LoginUserFormData, LoginUserSchema } from "@/schemas/LoginUser.Schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<LoginUserFormData>({
        resolver: zodResolver(LoginUserSchema)
    })

    const onSubmit = (data: LoginUserFormData) => {

    }

    //const parsedError = updateFoodIsError ? parseApiError(updateFoodError) : null;

    return (
        <div className="flex items-center justify-center h-dvh">
            <div className="w-70 md:w-80 px-8 py-7 bg-emerald-50 rounded-xl
                border-2 border-emerald-100 flex flex-col items-center gap-5">
                <span className="text-xl text-emerald-900 estedad-bold">ورود</span>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 w-full"
                >
                    {/* <FormLabel>
                            نام کاربری
                        </FormLabel> */}
                    <div className="flex flex-col gap-2">
                        <TextField
                            label="نام کاربری"
                            variant="outlined"
                            type="text"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                },
                            }}
                            {...register("username")}
                        //error={!!parsedError?.fieldErrors?.Name}
                        //helperText={!!parsedError?.fieldErrors?.Name?.[0]}
                        />

                        <div className="text-sm text-rose-500">{errors.username?.message}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <TextField
                            label="رمز عبور"
                            variant="outlined"
                            type="password"
                            autoSave="false"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                },
                            }}
                            {...register("password")}
                        />

                        <div className="text-sm text-rose-500">{errors.password?.message}</div>
                    </div>
                    
                    <Button variant="contained" type="submit">
                        ورود
                    </Button>
                </form>
            </div>
        </div>
    )
}