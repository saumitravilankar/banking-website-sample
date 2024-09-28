"use client"

import { motion } from "framer-motion";

type Props = {
    title: string;
    tagline: string;
    info: string
}

const SelectionStage = ({ title, tagline, info }: Props) => {
    return (
        <motion.div
            className="space-y-1">
            <h1 className="font-bold text-xl sm:text-3xl text-themeBlue">{title}</h1>
            <h3 className="font-base text-themeColor">{tagline}</h3>
            <p>{info}</p>
        </motion.div>
    )
}

export default SelectionStage