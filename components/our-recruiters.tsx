"use client"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Container from "@/components/ui/container"
import Image from 'next/image';

const OurRecruiters = () => {
    return (
        <div className='py-8 sm:py-16 bg-slate-50'>
            <Container>
                <h1 className='title'>Our Recruiters</h1>
                <div className='pt-2 sm:pt-8 lg:pt-11'>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2.8}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        speed={1200}
                        className='items-center'
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            350: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            },
                            648: {
                                slidesPerView: 4,
                                spaceBetween: 70
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 70
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/axis.png'} width={440} height={299} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/dcb.png'} width={1024} height={270} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/hdfc-bank-logo.png'} width={2500} height={433} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/IDFC.png'} width={866} height={650} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/IndusInd-Bank.png'} width={425} height={46} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/kotak.png'} width={800} height={535} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/Muthoot-Finance.png'} width={4310} height={3346} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/Paytm.png'} width={3000} height={2072} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-sm:w-[90px] sm:max-w-[150px] lg:max-w-[180px] h-32 flex items-center justify-center select-none'>
                                <Image src={'/bank/yesbank.png'} width={640} height={266} layout='responsive' alt='' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default OurRecruiters