"use client"

import { motion } from "framer-motion"

const Courses = () => {

    return (
        <>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{
                    once: true
                }}
                transition={{ delay: 0, ease: 'linear', duration: 0.5 }}
                className="flex-1 rounded-3xl p-4 sm:p-8 xl:p-10 space-y-5">
                <h1 className="font-bold max-sm:text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-themeBlue sm:leading-snug lg:leading-snug xl:leading-snug max-sm:leading-snug">Post Graduation Diploma in <br className="max-lg:hidden"/>
                    <span className="text-themeColor">
                        Banking & Finance
                    </span>
                </h1>
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{
                    once: true
                }}
                transition={{ delay: 0.1, ease: 'linear', duration: 0.5 }}
                className="flex-1 border rounded-3xl sm:bg-slate-50 p-4 sm:p-8 xl:p-10 space-y-5 shadow-md">
                <ul className=" sm:list-disc max-sm:text-center list-outside space-y-1 space-y-2">
                    <li className="text-sm xl:text-lg">45 day’s Training.</li>
                    <li className="text-sm xl:text-lg">Training mode is virtual.</li>
                    <li className="text-sm xl:text-lg">Daily 2 hrs of lectures. Overall 90 hrs of Training.</li>
                    <li className="text-sm xl:text-lg">Get Certification in “Post Graduation Diploma in Banking & Finance”.</li>
                    <li className="text-sm xl:text-lg">Training Fees: 21,000/-, including GST.</li>
                    <li className="text-sm xl:text-lg">Get placement in a Bank.</li>
                </ul>
            </motion.div>
        </>
    )
}

export default Courses