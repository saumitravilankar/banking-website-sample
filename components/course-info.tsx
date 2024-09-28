"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

import Container from './ui/container'

const CourseInfo = () => {
    return (
        <Container>
            <div className='w-full flex max-lg:flex-col max-xl:gap-6 items-center justify-center py-10'>
                <div className='flex-1 flex items-center justify-center'>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{
                            once: true
                        }}
                        transition={{ ease: 'linear', delay: 0.2 }}
                        className='sm:max-w-lg relative' >
                        <Image src={'/about.jpg'} alt='' width={6841} height={5000} layout='responsive' />
                    </motion.div>
                </div>
                <div className=' flex-1'>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{
                            once: true
                        }}
                        transition={{ ease: 'linear', delay: 0.2 }}
                        className='text-base leading-8 text-themeBlue'>Embark on a transformative journey with our <span className='text-lg font-bold text-themeColor'> Post Graduation Diploma in Banking & Finance </span>, a 20-day virtual training program designed for graduates and professionals. With a focus on academic excellence, candidates with over 50% in 10th, 12th, and graduation, a valid PAN or Aadhaar card, a CIBIL score exceeding 700 or -1, and age below 28 are invited to apply. The selection process involves eligibility screening, a career advisory interview, admission formalities, fee payment, and culminates in a certification and job placement. Join us to gain industry-relevant skills, guided by expert faculty, and launch your successful banking career.</motion.p>
                </div>
            </div>
        </Container>
    )
}

export default CourseInfo