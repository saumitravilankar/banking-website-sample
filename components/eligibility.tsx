"use client"

import { motion } from "framer-motion"

import Container from "@/components/ui/container"
import EligilityPoint from "@/components/ui/eligibility-point"

const EligibilityData = [
    {
        img: "/icons/excellence.svg",
        title: "Academic Excellence",
        desc: "Minimum 50% Marks Requirement",
        sentence: "Candidates must have achieved a score of over 50% in their 10th, 12th, and graduation examinations to be eligible for our Post Graduation Diploma in Banking & Finance."
    },
    {
        img: "/icons/identity.svg",
        title: "Identity Verification",
        desc: "Document Verification",
        sentence: "Applicants are required to submit a valid PAN or Aadhaar card for identity verification during the admission process."
    },
    {
        img: "/icons/cibil.svg",
        title: "Financial Fitness",
        desc: "CIBIL Score Assessment",
        sentence: "A CIBIL score of over 700 or a score of -1 is mandatory, ensuring financial soundness and creditworthiness for successful enrollment in our program."
    },
    {
        img: "/icons/calender.svg",
        title: "Age Criteria",
        desc: "Age Limitation",
        sentence: "Prospective students must be below 28 years of age to meet the age criteria for admission into the Post Graduation Diploma in Banking & Finance."
    },
]

const Eligibility = () => {
    return (
        <Container>
            <div className="py-14 sm:py-16 space-y-8">
                <h1 className="title">Eligibility Criteria</h1>
                <p className="text-themeBlue leading-8 text-center">Open to graduates and professionals from diverse backgrounds, our Post Graduation Diploma in Banking & Finance welcomes individuals with a passion for finance and a desire to excel in the dynamic world of banking.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-4">
                    {
                        EligibilityData.map((item, index) => (
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{
                                    once: true
                                }}
                                transition={{ ease: 'linear', delay: (index * 0.1) + 0.1 }}
                                key={index}>
                                <EligilityPoint img={item.img} title={item.title} desc={item.desc} sentence={item.sentence} />
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default Eligibility
