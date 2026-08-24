import { Suspense } from "react";
import FoodPageContent from "./FoodPageContent";
import LoadingComponent from "@/shared/components/loading";

export default function FoodPage() {
    return (
        <Suspense fallback={<LoadingComponent />}>
            <FoodPageContent />
        </Suspense>
    );
}