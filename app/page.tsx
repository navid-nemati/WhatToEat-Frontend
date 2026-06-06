import Container from "@/components/container";
import GetFoods from "@/features/foods/components/foodList";

export default function Home() {

  return (
    <div>

      {/* Hero Section */}
      <div className="pt-25 md:pt-40">
        <Container>
          <div className="flex flex-col gap-15">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col gap-15 itmes-center md:items-start">
                <p
                  className="estedad-bold text-3xl md:text-4xl text-emerald-900 drop-shadow-md text-shadow-sm leading-13"
                >بهترین <br /><span className="bg-linear-to-l from-green-600 to-green-500 bg-clip-text text-transparent">دستورهای آشپزی</span> را اینجا پیدا کنید.</p>

                <button className="bg-amber-400 transition-all duration-200 px-5 py-3 md:py-3 rounded-full text-lg md:text-xl shadow-md hover:shadow-xl focus:scale-[12] hover:opacity-15 cursor-pointer">
                  شروع آشپزی 🍳
                </button>
              </div>
            </div>
            <GetFoods />
          </div>
        </Container>
      </div>
    </div>
  );
}
