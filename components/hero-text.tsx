"use client"

import { motion } from "framer-motion"

import { Button } from "./ui/button"
import Link from "next/link"

function HeroText() {
    return (
        <div className="absolute top-0 h-full flex items-center justify-center max-2xl:w-3/5 max-sm:w-4/5 w-2/5 select-none">
            <div className="flex-[2] flex flex-col justify-center space-y-4 sm:space-y-3 lg:space-y-6 items-start text-start max-sm:ml-0 max-2xl:ml-[5vw]" >
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, repeatCount: 0 }}
                    viewport={{
                        once: true
                    }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="font-bold text-base sm:text-sm lg:text-lg text-start w-full text-themeBlue">Unlock Your Banking Career</motion.p>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, repeatCount: 0 }}
                    viewport={{
                        once: true
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-black text-3xl sm:text-2xl lg:text-4xl xl:text-6xl leading-tight text-themeColor">Institute of Banking & Finance (IBFSA)</motion.h1>
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, repeatCount: 0 }}
                    viewport={{
                        once: true
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className=" text-start text-xs lg:text-base font-medium w-full">Empowering dreams, shaping future bankers, your journey to banking excellence begins here !</motion.h2>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, repeatCount: 0 }}
                    viewport={{
                        once: true
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link href={'tel:+919970114143'}>
                        <Button className="rounded-none max-lg:max-w-[110px] max-lg:text-xs lg:w-[180px] lg:h-[45px]" variant={'default'} size={'sm'}>Contact Today</Button>
                    </Link>
                </motion.div>
            </div >
        </div>
    )
}

export default HeroText

