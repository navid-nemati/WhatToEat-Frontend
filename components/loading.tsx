export default function LoadingComponent() {
    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="bg-emerald-200/60 border border-emerald-400/60 backdrop-blur-lg rounded-xl px-4 py-3">
                <div className="flex items-center gap-4.5">
                    <div>در حال بارگذاری</div>
                    <div className="flex items-center justify-center text-2xl ml-2">
                        <div className="absolute flex items-center justify-center">
                            <div className="flex items-center justify-center gap-0.5 mb-2 text-pink-500">
                                <span className="moveUpDown">.</span>
                                <span className="moveUpDown">.</span>
                                <span className="moveUpDown">.</span>
                            </div>
                            <div className="absolute flex items-center justify-center text-green-400 gap-0.5 mb-2">
                                <span className="moveUpDown2">.</span>
                                <span className="moveUpDown2">.</span>
                                <span className="moveUpDown2">.</span>
                            </div>
                            <div className="absolute flex items-center justify-center text-blue-800 gap-0.5 mb-2">
                                <span className="moveUpDown3">.</span>
                                <span className="moveUpDown3">.</span>
                                <span className="moveUpDown3">.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}