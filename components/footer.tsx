import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import Container from '@/components/ui/container'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='bg-contact bg-contain bg-center bg-no-repeat relative'>
            <Container>
                <div className='grid sm:justify-items-center grid-cols-1 sm:grid-cols-3 py-10 sm:py-14 gap-5 sm:gap-10 tracking-wide relative z-[2]'>
                    <div className='my-4 space-y-4 flex justify-center items-center'>
                        <div className='w-[300px] relative'>
                            <Image src={'/logo_green.png'} alt='Ibfsa' width={120} height={120} layout='responsive'/>
                        </div>
                    </div>
                    <div className='my-4 space-y-4'>
                        <h1 className='font-bold text-2xl capitalize text-themeColor'>Important Links</h1>
                        <ul className='flex flex-col gap-2 text-themeBlue font-normal'>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4 border-b border-themeBlue border-dashed' href={'/'}>Home</Link>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4 border-b border-themeBlue border-dashed' href={'/about'}>About</Link>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4 border-b border-themeBlue border-dashed' href={'/post-graduation-diploma-in-banking&finance'}>Course</Link>
                            <Link className='text-md hover:font-semibold hover:text-themeText pb-4' href={'/contact'}>Contact</Link>
                        </ul>
                    </div>
                    <div className='my-4 space-y-4'>
                        <h1 className='font-bold text-2xl capitalize text-themeColor'>Contact Details</h1>
                        <div className='space-y-4'>
                            <Link href={'tel:+919970114143'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <Phone className='w-5 h-5' />
                                </div>
                                <span className=''>
                                    +91 9970114143
                                </span>
                            </Link>
                            <Link href={'https://wa.me/+919970114143'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <FaWhatsapp className='w-5 h-5 text-green-600' />
                                </div>
                                <span className=''>
                                    +91 9970114143
                                </span>
                            </Link>
                            <Link href={'mailto:ibfsa.kolhapur@gmail.com'} className='flex items-center justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className=''>
                                    <Mail className='w-5 h-5 text-themeColor' />
                                </div>
                                <span className=''>
                                    ibfsa.kolhapur@gmail.com
                                </span>
                            </Link>
                            <span className='flex items-start justify-start w-full gap-2 hover:text-themeText text-themeBlue'>
                                <div className='mt-1'>
                                    <MapPin className='w-5 h-5' />
                                </div>
                                <span className='flex-[2] text-sm'>
                                    Shop no.312, 3rd floor, Matoshri Plaza, Venus Corner, Kolhapur
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='bg-themeColor text-white font-normal text-md text-center w-full py-3 relative z-[2]'>
                <span>© {new Date().getFullYear()} Institute of banking finance skill academy (IBFSA) All rights reserved.</span>
            </div>
            <div className='absolute w-full h-full bg-slate-50 top-0 left-0 opacity-20 z-1' />
        </div>
    )
}

export default Footer