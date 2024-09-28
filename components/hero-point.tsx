"use client"

import Image from "next/image";
import { motion} from 'framer-motion'
import { cn } from "@/lib/utils";

type Props = {
    src: string;
    name: string;
    description: string;
    index: number;
    classname?: string;
}

const HeroPoint = ({ src, name, description, index, classname }: Props) => {

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, repeatCount: 0 }}
            viewport={{
                once: true
            }}
            transition={{ delay: (index * 0.15), ease: 'linear' }}
            key={name} className={cn("border min-w-full rounded-lg p-3 sm:p-4 lg:p-6 space-y-2 md:space-y-3 bg-white sm:min-h-[190px] lg:min-h-[220px] shadow-lg", classname)}>
            <div className="max-w-[40px] sm:max-w-[45px] lg:max-w-[50px]">
                <Image src={src} alt={name} width={64} height={64} layout="responsive" />
            </div>
            <h1 className="font-bold text-themeColor text-base lg:text-lg">{name}</h1>
            <p className="text-sm leading-relaxed">{description}</p>
        </motion.div>
    )
}

export default HeroPoint
