import FoodList from "@/features/foods/components/foodList";
import Container from "@/shared/components/container";

export default function Food() {
    return (
        <div className="pt-24 md:pt-30">
            <Container>
                <FoodList />
            </Container>
        </div>
    )
}