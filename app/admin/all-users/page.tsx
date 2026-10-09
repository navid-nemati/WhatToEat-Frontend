'use client'

import useGetAllUsers from "@/features/auth/hooks/useGetAllUsers";
import LoadingComponent from "@/shared/components/loading";
import ProtectedRoute from "@/shared/components/ProtectedRoute";

export default function AllUsers() {
    const { data, isLoading, isError } = useGetAllUsers();


    if (isLoading) {
        return <LoadingComponent />;
    }

    if (isError) {
        return <p>دریافت اطلاعات کاربران با خطا مواجه شد.</p>;
    }

    return (
        <ProtectedRoute role="Admin">
            <div className="pt-28">
                <span>همه کاربران</span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {data?.map((item) => (
                        <div
                            key={item.username}
                            className="flex flex-col gap-2 rounded-xl bg-emerald-50 border border-emerald-200 p-3"
                        >
                            <span>نام کامل: {item.fullName ?? "ثبت نشده"}</span>
                            <span>نام کاربری: {item.username}</span>
                            <span>ایمیل: {item.email}</span>
                            <span>شماره موبایل: {item.phoneNumber ?? "ثبت نشده"}</span>
                        </div>
                    ))}
                </div>
            </div>
        </ProtectedRoute>
    );

}
