"use client"

import { motion } from "framer-motion"

type Props = {
    heading: string,
    content: string
}

const MissionVissionContent = ({ heading, content }: Props) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{
                once: true
            }}
            transition={{ ease: 'linear', duration: 0.5 }}
            className="flex-1 flex flex-col justify-center items-center text-start gap-3">
            <h1 className="text-4xl xl:text-5xl font-black text-white">{heading}</h1>
            <p className="w-4/5 xl:w-3/5 py-2 text-justify text-white text-sm leading-7 xl:leading-8">{content}</p>
        </motion.div>
    )
}

export default MissionVissionContent