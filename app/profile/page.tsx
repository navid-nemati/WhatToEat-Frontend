'use client'
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/shared/components/ProtectedRoute";

export default function ProfilePage() {
    return (
        <ProtectedRoute>
            <ProfileContent />
        </ProtectedRoute>
    );
}

function ProfileContent() {
    const { user } = useAuth();

    return (
        <div className="px-10 py-30">
            <div className="flex flex-col gap-2 mt-5">
                <h1 className="text-2xl font-bold">بهههه، ببین کی اینجاست {user?.username} 😘</h1>
                <p>ایمیل: {user?.email}</p>
                <p>نقش: {user?.roles[0]}</p>
            </div>


            {/* <button
                onClick={logout}
                className="mt-4 bg-rose-500 text-white px-4 py-2 rounded"
            >
                خروج از حساب
            </button> */}
        </div>
    );
}