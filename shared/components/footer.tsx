import Container from "./container";

export default function Footer() {
    return (
        <footer className="w-full bg-linear-to-bl from-emerald-600 to-emerald-500
         pb-2 pt-4 px-3 md:pt-5 md:pb-2 mt-12 rounded-t-xl ring-2 ring-emerald-400">
            <Container>
                <span className="text-white text-shadow-md">
                    با ما همیشه خوشمزه زندگی کنید.
                </span>
                <div className="flex items-center gap-2">
                    <p className="text-sm text-slate-100 mt-2">
                        نوید نعمتی 2026 &copy;
                    </p>
                    <a href="https://github.com/navid-nemati"
                        target="_blank" rel="noopener norefferer"
                        className="mt-2 text-white text-shadow-md hover:text-amber-200">گیت هاب من</a>
                </div>

            </Container>
        </footer>
    )
}

//bg-linear-to-b from-emerald-500 from-20% to-emerald-700 to-90%