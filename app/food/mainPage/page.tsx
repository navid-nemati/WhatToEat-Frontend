import GetFoods from "@/features/foods/components/foodList";
import Container from "@/shared/components/container";

export default function Food() {
    return (
        <div className="pt-30">
            <Container>
                <GetFoods />
            </Container>
        </div>
    )
}