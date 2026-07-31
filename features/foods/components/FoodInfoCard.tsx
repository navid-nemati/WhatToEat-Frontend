import { IFoodDetailDto } from "../types/Food";

interface props {
    food?: IFoodDetailDto
}

export default function FoodInfoCard({ food }: props) {


    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full mb-6">
            <div className="text-2xl font-bold text-gray-800">{food?.name}</div>
            <div className="text-gray-500 mt-1">دسته بندی: <span className="text-emerald-600 font-medium">{food?.categoryName}</span></div>
            <p className="leading-7 text-justify mt-3">{food?.recipe}</p>
        </div>
    )
}