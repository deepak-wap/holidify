import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/effect-fade';

const Hero = ()=>{
    return (
        <>
            <div className="pl-[8.9%] pr-[8.9%]">
                <div className="absolute h-[460px] w-[1110px] bg-black bg-opacity-50 z-20"></div>
                <Swiper
                    // install Swiper modules
                    modules={[Autoplay, Navigation,Pagination, Scrollbar, A11y, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    effect='fade'
                    // initialSlide={2}
                    // navigation
                    pagination={{ clickable: true}}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    className="rounded-[4px] relative"
                >
                    <SwiperSlide>
                        <div className="h-[460px] w-[110] overflow-hidden">
                            <Image src={'/images/UDAIPUR.jpg'} width={1110} height={460}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[460px] overflow-hidden">
                            <Image src={'/images/JAIPUR.jpg'} width={1110} height={460}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[460px] overflow-hidden">
                            <Image src={'/images/UDAIPUR.jpg'} width={1110} height={460}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[460px] overflow-hidden">
                            <Image src={'/images/UDAIPUR.jpg'} width={1110} height={460}/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="mt-[-150px] ml-[285px] z-20 absolute w-fit flex flex-col items-center">
                        <h1 className="text-[42px] text-white font-[manrope] tracking-[0.43px] font-bold mt-[-12px]">Holidify With Us</h1>
                        <p className="text-[22.58px] text-white font-[manrope] tracking-[0.4px] mt-1 mb-5">Discover your next holiday destination</p>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                <i className="bx bx-search text-[23px] text-gray-500"></i>
                            </div>
                            <input
                                type="search"
                                className="mt-[2px] outline-none border border-[1px] border-slate-300 rounded-[4px] w-[540px] h-[46px] py-[29px] ps-[43px] text-[17px] tracking-[0.3px] placeholder:text-slate-500"
                                placeholder="Try 'Manali'"
                            />
                        </div>
                </div>
            </div>
        </>
    )
}

export default Hero