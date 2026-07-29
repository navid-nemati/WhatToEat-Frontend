'use client'
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingComponent from "./loading";

export default function ProtectedRoute({ children, role }: { children: React.ReactNode, role?: string }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                // لاگین نکرده؟ بفرست لاگین
                router.push("/login");
            }
            else if (role && !user?.roles?.includes(role)) {
                router.push("/profile");
            }
        }
    }, [user, loading, role, router]);

    if (loading || !user || (role && !user.roles.includes(role))) {
        return <div><LoadingComponent /></div>;
    }

    return <>{children}</>;
}