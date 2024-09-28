"use client"

import { motion, useScroll } from 'framer-motion'

import Container from './ui/container'
import SelectionStage from './selection-stage'
import { useRef } from 'react'
import CircleIcon from './ui/circle-icon'

const SelectionData = [
    {
        title: "Eligibility Screening:",
        tagline: "Initial Evaluation",
        info: "Candidates undergo a thorough screening process to ensure they meet the eligibility criteria for the Post Graduation Diploma in Banking & Finance."
    },
    {
        title: "Career Advisory Interview:",
        tagline: "Guidance Session with Banking Career Adviser",
        info: "Shortlisted candidates engage in an insightful interview with our banking career adviser, providing valuable guidance for their future in the banking sector."
    },
    {
        title: "Admission Formalities:",
        tagline: "Complete Admission Procedures",
        info: "Successful candidates, post-interview, proceed to complete necessary admission formalities, securing their enrollment in the program."
    },
    {
        title: "Course Enrollment:",
        tagline: "Fee Payment for Post Graduation Diploma",
        info: "After completing admission requirements, candidates are required to pay the course fee for the Post Graduation Diploma in Banking & Finance to commence their educational journey."
    },
    {
        title: "Certification and Bank Placement:",
        tagline: "Completion, Certification, and Job Placement",
        info: "Upon successful completion of the program, candidates clear a final interview, receive certification, and seamlessly transition into their banking careers with placement assistance."
    },
]

type Props = {}

const SelectionProcess = (props: Props) => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <Container>
            <div ref={ref} className='pt-10 pb-20'>
                <h1 className='title text-center'>Selection Process</h1>
                <div className='mt-20 w-[95%] sm:w-[80%] xl:w-[75%] 2xl:w-1/2 mx-auto relative flex items-center justify-center'>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className='absolute left-0 top-0 w-[4px] h-full bg-themeColor origin-top' />
                    <div className='w-4/5 mx-auto -mt-1 space-y-8'>
                        {SelectionData.map((item, index) => (
                            <div key={index}>
                                <CircleIcon reference={ref} />
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{
                                        once: true
                                    }}
                                    transition={{ ease: 'linear', delay: (index * 0.1) + 0.1 }}
                                >
                                    <SelectionStage title={item.title} info={item.info} tagline={item.tagline} />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SelectionProcess