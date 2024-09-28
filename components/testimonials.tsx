"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import '@/styles/feedback-carousel.css'
import { Feedbacks } from '@/constants';
import Container from "@/components/ui/container";

const Testimonials = () => {
    return (
        <div className="py-14 sm:py-20 w-full bg-count bg-no-repeat bg-cover bg-top bg-fixed relative">
            <div className='absolute w-full h-full top-0 bg-slate-900 bg-opacity-70 lg:py-10' />
            <Container>
                <div className='h-full space-y-10'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={100}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                        }}
                        speed={1200}
                        loop
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="custom-swiper"
                    >
                        {Feedbacks.map((feedback) => (
                            <SwiperSlide key={feedback.name}>
                                <div key={feedback.name} className='text-center text-white sm:text-xl select-none px-10 flex flex-col items-center justify-center gap-6 mb-8 sm:mb-14'>
                                    <div className='w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] relative flex items-center justify-center border-themeColor border-[10px] rounded-full'>
                                        <Image src={feedback.image} alt='' fill objectFit='cover' objectPosition='top' className='rounded-full'/>
                                    </div>
                                    <p className='max-sm:text-justify max-sm:hyphens-auto max-sm:whitespace-normal leading-8 sm:leading-10'>{feedback.comment}</p>
                                    <p>- {feedback.name}</p>
                                    <p className='text-sm -mt-4'>{feedback.bankName}</p>
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default Testimonials;