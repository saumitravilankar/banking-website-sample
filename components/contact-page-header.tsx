import { Mail, Phone } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'

const ContactPageHeader = () => {
    return (
        <div className='relative bg-contactHeader bg-cover bg-no-repeat bg-fixed bg-center h-[400px] flex flex-col items-center justify-center gap-7'>
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50' />
            <h1 className='font-bold text-5xl max-sm:tracking-wide sm:text-7xl text-white px-6 py-4 relative z-10 text-center'>Contact Us</h1>
            <div className='flex max-sm:flex-col items-center justify-center max-sm:gap-4 gap-[3vw] text-white text-lg relative z-10'>
                <Link href={'tel:+919970114143'} className='flex items-center justify-center w-full gap-2 px-2 hover:text-themeColor hover:bg-white hover:rounded-lg'>
                    <div className=''>
                        <Phone className='w-5 h-5' />
                    </div>
                    <span className=''>
                        +91 9970114143
                    </span>
                </Link>
                <Link href={'https://wa.me/+919970114143'} className='flex items-center justify-center w-full gap-2 px-2 hover:text-themeColor hover:bg-white hover:rounded-lg'>
                    <div className=''>
                        <FaWhatsapp className='w-5 h-5' />
                    </div>
                    <span className=''>
                        +91 9970114143
                    </span>
                </Link>
                <Link href={'mailto:ibfsa.kolhapur@gmail.com'} className='flex items-center justify-center w-full gap-2 px-2 hover:text-themeColor hover:bg-white hover:rounded-lg'>
                    <div className=''>
                        <Mail className='w-5 h-5' />
                    </div>
                    <span className=''>
                        ibfsa.kolhapur@gmail.com
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default ContactPageHeader