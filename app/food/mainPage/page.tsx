import Container from "@/shared/components/container";
import GetFoods from "@/features/Food/components/getFoods";

export default function Food() {
    return (
        <div className="pt-30">
            <Container>
                <GetFoods />
            </Container>
        </div>
    )
}