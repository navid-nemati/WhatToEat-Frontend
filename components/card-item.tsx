import { formatNumberWithCommas } from "@/utils/number";
import Link from "next/link";

export default function CardItem() {
    return (
        <Link href={''} className='relative z-10 rounded-xl flex flex-col min-w-[150px] lg:min-w-[290px] min-h-[230px] lg:min-h-[386px] max-w-40 lg:max-w-52.5 transition-all duration-300 hover:shadow-[-4px_4px_8px_rgba(0,0,0,0.2)] hover:scale-[1.015] my-5 mx-0.5 p-1.5 lg:p-3'>
            <div className='flex relative items-center justify-center rounded-md lg:rounded-xl bg-[#DFE8E4] px-3 py-1 lg:px-5 lg:py-2'>
                <img src="/macbookpro.png" className='object-cover object-center' />
                <div className='absolute left-3 top-3 flex items-center'>
                    <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 -ml-2 lg:-ml-2.5 rounded-full bg-[#56DFCF]'></div>
                    <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 -ml-2 lg:-ml-2.5 rounded-full bg-[#77BEF0]'></div>
                    <div className='w-3.5 h-3.5 lg:w-5 lg:h-5 rounded-full bg-[#57564F]'></div>
                </div>
            </div>
            <div className='price-parent flex flex-col px-1 py-2 justify-between flex-1'>
                <div className='self-end'>
                    <h3 className='plusjs text-end text-sm lg:text-lg'>Mac book pro 2025</h3>
                    <div className='plusjs flex items-center justify-end text-[10px] lg:text-sm gap-2 lg:gap-4 text-[#394C46] mt-1.5'>
                        <div className='flex items-center gap-1'>
                            <span>16 inc</span>
                            {/* <MdScreenshotMonitor className="lg:text-xl" /> */}
                        </div>
                        <div className='flex items-center gap-1'>
                            <span>256GB</span>
                            {/* <FaRegHardDrive className="lg:text-lg" /> */}
                        </div>
                        <div className='flex items-center gap-1'>
                            <span>M2</span>
                            {/* <PiCpuLight className="lg:text-xl" /> */}
                        </div>
                    </div>
                </div>
                <div className='flex items-end justify-between mt-4'>
                    <div className='flex flex-col'>
                        <div className="flex items-center gap-1 line-through">
                            <span className="text-[#445D54] text-[10px] lg:text-[14px] vazir-num">{formatNumberWithCommas(105000000)}</span>
                            <img src="/currency.svg" className="max-w-[14px] lg:max-w-[18px]" />
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-[#1A2421] text-xs lg:text-xl vazir-num">{formatNumberWithCommas(95300000)}</span>
                            <img src="/currency.svg" className="max-w-[19px] lg:max-w-[25px]" />
                        </div>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <span className='lg:text-2xl text-[#00C897] vazir-num'>25%</span>
                        <div className='flex items-center justify-center p-1.5 lg:p-2.5 text-[#480707] rounded-sm lg:rounded-md bg-[#FFC7C7]'>
                            {/* <TbBasketX className="lg:text-2xl" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}