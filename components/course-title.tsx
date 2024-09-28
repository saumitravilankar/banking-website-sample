"use client"

import { motion } from "framer-motion";

type Props = {
    title: string;
    tagline: string
}

const CourseTitle = ({ title, tagline }: Props) => {

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, repeatCount: 0 }}
            viewport={{
                once: true
            }}
            transition={{ delay: 0.5, ease: 'linear' }}
        >
            <h1 className="title">{title}</h1>
            <p className="text-sm font-semibold mt-2">{tagline}</p>
        </motion.div>
    )
}

export default CourseTitle