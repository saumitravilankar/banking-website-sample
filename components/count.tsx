"use client"

import { useInView } from 'framer-motion'
import { useRef } from 'react';
import CountUp from 'react-countup';
import Container from './ui/container';
import { cn } from '@/lib/utils';

const CountData = [
    {
        count: 4000,
        title: 'Trained & Placed'
    },
    {
        count: 10,
        title: 'States'
    },
    {
        count: 10,
        title: 'Centers'
    },
]


const Count = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div className='relative bg-count bg-cover bg-no-repeat bg-fixed bg-top'>
            <Container>
                <div className='grid sm:grid-cols-3 w-full max-sm:gap-10 py-14 sm:py-28 justify-center items-center relative' ref={ref}>
                    {
                        CountData.map((data, i) => (
                            <div key={data.title} className={cn('space-y-4 w-full flex justify-center items-center flex-col text-center font-bold last:border-none relative z-10', data.title === 'Trained & Placed' || 'States' ? 'sm:border-r border-slate-300' : '')}>
                                <p className=' text-white text-3xl lg:text-5xl text-center w-full'>
                                    {isInView ? <CountUp start={0} end={data.count} duration={2.5} delay={i * 0.05} /> : ''}
                                    {data.count === 4000 && '+'}
                                </p>
                                <p className='text-themeColor text-2xl lg:text-4xl'>{data.title}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
            <div className='absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-80 z-1' />
        </div>
    )
}

export default Count