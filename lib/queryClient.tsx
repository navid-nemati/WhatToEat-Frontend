import { onlineManager, QueryClient } from "@tanstack/react-query";

// onlineManager.setEventListener((setOnline) => {
//     const onOnline = () => setOnline(true)
//     const onOffline = () => setOnline(false)

//     window.addEventListener("online", onOnline)
//     window.addEventListener("offline", onOffline)

//     return () => {
//         window.removeEventListener("online", onOnline)
//         window.removeEventListener("offline", onOffline)
//     }
// })

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            retryDelay: 1000,
            staleTime: 1000 * 60 * 5,
            refetchOnReconnect: true,
        },
    },
});