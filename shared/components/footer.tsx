import Container from "./container";

export default function Footer() {
    return (
        <footer className="w-full bg-linear-to-bl from-emerald-600 to-emerald-500
         p-5 mt-12 rounded-t-xl ring-2 ring-emerald-400">
            <Container>
                <div className="text-white text-shadow-md">
                    با ما همیشه خوشمزه زندگی کنید.
                </div>
            </Container>
        </footer>
    )
}

//bg-linear-to-b from-emerald-500 from-20% to-emerald-700 to-90%