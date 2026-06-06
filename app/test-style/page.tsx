import CardItem from "@/shared/components/card-item";
import Container from "@/shared/components/container";
import { formatNumberWithCommas } from "@/utils/number";

export default function TestStyle ()
{
    return (
        <div className="h-[2000px]">
              {/* <Image src="/logo/logo.svg"
                width={200}
                height={20}
                alt="logo" /> */}
        
              {/* Hero section */}
              {/* <section>
                  <div className="relative w-full h-dvh">
                    <div style={{ backgroundImage: "url('/bg-wood-w.webp')"}} 
                    className="absolute inset-0 bg-cover bg-center"></div>
                  </div>
                  <div className="absolute inset-0 bg-black/50"></div>
                </section> */}
        
              {/* <div className="w-full flex justify-center">
                <div className="w-full max-w-20 aspect-square mt-10">
                  <img src="/arrow-gif.gif" />
                </div>
              </div> */}
        
              <div className="flex items-center gap-2 pt-30 px-5 justify-between">
                <CardItem />
              </div>
        
              <Container>
                <div className="w-full overflow-x-auto p-2">
                  <div className="w-300">
                    <div className="ring ring-sky-200 bg-sky-200 rounded-t-xl grid grid-cols-12 divide-x divide-sky-400">
                      <div className="p-2 col-span-1 flex items-center justify-center">
                        <span>#</span>
                      </div>
                      <div className="py-2 px-4 col-span-1">
                        <span>تصویر</span>
                      </div>
                      <div className="py-2 px-4 col-span-3">
                        <span>عنوان</span>
                      </div>
                      <div className="py-2 px-4 col-span-1">
                        <span>دسته‌بندی</span>
                      </div>
                      <div className="py-2 px-4 col-span-1">
                        <span>رنگ ها</span>
                      </div>
                      <div className="py-2 px-4 col-span-1">
                        <span>قیمت</span>
                      </div>
                      <div className="py-2 px-4 col-span-1">
                        <span>موجودی</span>
                      </div>
                      <div className="py-2 px-4 col-span-1">
                        <span>ID</span>
                      </div>
                      <div className="py-2 px-4 col-span-2">
                        <span>عملیات</span>
                      </div>
                    </div>
                    <div className="ring ring-primary-dark/30 rounded-b-xl grid grid-cols-12 divide-x divide-primary-dark/30">
                      <div className="p-2 col-span-1 flex items-center justify-center">
                        <span>1</span>
                      </div>
                      <div className="py-2 px-4 col-span-1">
                        <div className="aspect-square w-full">
                          <img src="/macbookpro.png"
                            className="w-full h-full object-contain object-center" />
                        </div>
                      </div>
                      <div className="py-2 px-4 col-span-3 flex items-center">
                        <span>macbook pro 2025</span>
                      </div>
                      <div className="py-2 px-4 col-span-1 flex items-center">
                        <span>لپتاپ</span>
                      </div>
                      <div className="py-2 px-3 col-span-1 flex flex-wrap items-center">
                        <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#56DFCF] m-0.5'></div>
                        <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#77BEF0] m-0.5'></div>
                        <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#57564F] m-0.5'></div>
                        <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#57564F] m-0.5'></div>
                        <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#57564F] m-0.5'></div>
                        <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#57564F] m-0.5'></div>
                      </div>
                      <div className="py-2 px-4 col-span-1 flex items-center">
                        <span>{formatNumberWithCommas(95300000)}</span>
                      </div>
                      <div className="py-2 px-4 col-span-1 flex items-center">
                        <span>4</span>
                      </div>
                      <div className="py-2 px-4 col-span-1 flex items-center">
                        <span>12</span>
                      </div>
                      <div className="py-2 px-5 col-span-2 flex items-center justify-center gap-3">
                        <button className="bg-amber-300 text-white transition-all duration-200 px-3 py-1 text-sm rounded-lg hover:scale-110 shadow-sm hover:shadow-md">
                          ویرایش
                        </button>
                        <button className="bg-red-400 text-white transition-all duration-200 px-3 py-1 text-sm rounded-lg hover:scale-110 shadow-sm hover:shadow-md">
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
        
              <Container>
                <div className="w-full bg-sky-200 p-5 mt-20 rounded-lg xl:bg-sky-800 lg:bg-yellow-500 md:bg-rose-400 sm:bg-green-600"></div>
              </Container>
        
              <button className="m-10 px-5 py-2 rounded-lg text-white bg-sky-500 transition-colors duration-400 hover:bg-emerald-400">
                hover me
              </button>
        
              <Container>
                <div className="grid  gap-3">
                  <div className="w-full h-10 rounded-lg bg-rose-400"></div>
                  <div className="w-full h-10 rounded-lg bg-rose-400"></div>
                  <div className="w-full h-10 rounded-lg bg-rose-400"></div>
                  <div className="w-full h-10 rounded-lg bg-rose-400"></div>
                </div>
              </Container>
        
              <div className="p-20 bg-amber-300 rounded-lg m-10" id="/hi"></div>
            </div>
    )
}