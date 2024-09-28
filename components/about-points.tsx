"use client"

import { motion } from 'framer-motion'

import Container from '@/components/ui/container'

const AboutData = [
    {
        sentence: 'IBFSA, a cutting-edge Ed Tech company, was founded by BFSI Sector experts with an impressive 5 decades of combined industry experience. Our foundation is built on robust partnerships with leading BFSI companies and a commitment to shaping the future of financial education. With a stellar track record of graduate placements, we stand as a testament to practical, real-life learning experiences, transcending traditional theoretical knowledge. Our crowning achievement is our Best in Class Learning Management System, the backbone of our comprehensive approach to education. We have established a widespread presence across the country, equipped with state-of-the-art infrastructure and amenities, and our trainers are accomplished Subject Matter Experts in the BFSI sector.'
    },
    {
        sentence: 'At IBFSA, our approach is two-fold, offering both classroom and online capabilities. We recognize that for maximum impact in skilling, a blended pedagogy is essential. Technology is interwoven throughout our entire process, from enrollment and pedagogy to assessment and placement, ensuring that our students are prepared for the evolving demands of the industry. We are dedicated to providing the best possible education in the BFSI sector, and our unwavering commitment to innovation and excellence sets us apart. Join us in this transformative journey as we equip you with the skills and knowledge necessary for success in the ever-changing world of finance.'
    }
]

const AboutPoints = () => {
    return (
        <div className='py-14 bg-slate-50'>
            <Container>
                <div className='space-y-6'>
                    <div className='flex items-center justify-center'>
                        <div className='flex-1 w-full max-lg:hidden'></div>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{
                                once: true
                            }}
                            transition={{ ease: 'linear' }}
                            className='flex-[2] w-full h-full text-3xl md:text-6xl font-black text-themeColor'>
                            ABOUT US.
                        </motion.div>
                    </div>
                    <div className='flex items-start justify-center text-sm'>
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{
                                once: true
                            }}
                            transition={{ ease: 'linear', delay: 0.2 }}
                            className='flex-1 w-full h-full text-sm leading-8 text-themeBlue max-lg:hidden'>About,<br />
                            <p className='w-1/2 text-sm leading-8'>
                                Institute of Banking & Finance Skills Academy <br />(IBFSA)
                            </p>
                        </motion.div>
                        <div className='flex-[2] w-full h-full'>
                            {AboutData.map((item, i) => (
                                <ul key={i}>
                                    <motion.li
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{
                                            once: true
                                        }}
                                        transition={{ ease: 'linear', delay: (i * 0.1) + 0.1 }}
                                        className='text-xs sm:text-sm text-justify max-sm:leading-6 sm:leading-8 first:pb-2 text-themeBlue'>{item.sentence}</motion.li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutPoints