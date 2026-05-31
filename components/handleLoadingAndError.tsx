import LoadingComponent from "./loading";

interface props {
    isLoading: boolean,
    isError: boolean,
    error: Error | null
}

export default function HandleLoadingAndError({ isLoading, isError ,error }: props) {

    if (isLoading) return (
        <LoadingComponent />
    )

    if (isError) {
        return (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <p className="text-red-500 text-center p-4">
                    {(error as Error).message}
                    {/* {toast.error((error as Error).message)} */}
                </p>
            </div>
        );
    }

}