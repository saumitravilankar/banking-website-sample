"use client"
import React from 'react'

import { motion, useScroll } from 'framer-motion'

type Props = {
    reference: React.RefObject<HTMLDivElement>
}

const CircleIcon = ({ reference }: Props) => {

    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["start center", "center center"]
    })

    return (
        <figure className='absolute -left-[35px] stroke-themeColor'>
            <svg className='-rotate-90' width={75} height={75} viewBox='0 0 100 100'>
                <circle cx={75} cy={50} r={20} className='stroke-themeColor stroke-1 fill-none' />
                <motion.circle
                    style={{
                        pathLength: scrollYProgress,
                    }}
                    cx={75} cy={50} r={20} className='stroke-[5px] fill-white' />
                <circle cx={75} cy={50} r={10} className='animate-pulse stroke-1 fill-themeColor' />
            </svg>
        </figure>
    )
}

export default CircleIcon