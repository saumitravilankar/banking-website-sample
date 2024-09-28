"use client"

import Image from "next/image";
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils";

type Props = {
    src: string;
    name: string;
    description: string;
    index: number;
    classname?: string;
}

const ServicePoint = ({ src, name, description, index, classname }: Props) => {

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, repeatCount: 0 }}
            viewport={{
                once: true
            }}
            transition={{ delay: (index * 0.15), ease: 'linear' }}
            key={name} className={cn("space-y-3 min-h-[220px] flex flex-col items-center justify-center max-sm:text-center sm:justify-start sm:items-start w-full bg-slate-50 shadow-md", classname)}>
            <div className="h-[55px] w-[55px] sm:h-[60px] sm:w-[60px] lg:h-[60px] lg:w-[60px] relative">
                <Image src={src} alt={name} layout="fill" objectFit="cover" objectPosition="center" />
            </div>
            <h1 className="font-bold text-xl text-themeBlue">{name}</h1>
            <p className="text-sm leading-relaxed text-themeBlue">{description}</p>
        </motion.div>
    )
}

export default ServicePoint