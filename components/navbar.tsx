"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Roboto } from "next/font/google"
const roboto = Roboto({
    weight: "400",
    subsets: ['cyrillic-ext']
})
import { Twitter, Facebook, Linkedin, Instagram, Menu } from "lucide-react"

import Container from "@/components/ui/container"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"


const NavLinks = [
    {
        href: '/',
        name: 'Home'
    },
    {
        href: '/about',
        name: 'About'
    },
    {
        href: '/post-graduation-diploma-in-banking&finance',
        name: 'Course'
    },
    {
        href: '/contact',
        name: 'Contact'
    }
]

const Navbar = () => {

    const pathName = usePathname()

    return (
        <>
            <div className="w-full max-sm:hidden">
                <Container>
                    <div className="w-full flex justify-between items-center max-xl:gap-6 py-3">
                        <Link href={'/'} className="flex items-center justify-start gap-2 w-full">
                            <div className="sm:min-w-[80px] max-w-[125px]">
                                <Image src={'/logo_green.png'} alt="IBFSA" width={120} height={120} layout="responsive" />
                            </div>
                            <div className="flex flex-col h-full justify-center gap-1 text-themeColor font-semibold max-xl:w-max max-lg:hidden">
                                <h1 className={cn("text-xl xl:text-3xl uppercase tracking-tight")}>Institute of Banking Finance</h1>
                                <p className="text-xs uppercase font-base text-themeBlue">(Skills Academy)</p>
                            </div>
                        </Link>
                        <div className="flex items-start justify-center gap-4 text-themeBlue">
                            <div className="text-xs w-1/2 border-r border-r-slate-400">
                                <span className="font-light">Address: </span>
                                <span className="text-themeColor">Shop no.312, 3rd floor, Matoshri Plaza, Venus Corner, Kolhapur</span>
                            </div>
                            <Link href={'tel:+919970114143'} className="text-xs">
                                <span className="font-light">Free Call: </span> <br className="lg:hidden" />
                                <span className="min-w-max text-themeColor">+91 9970114143</span>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="border-t shadow-sm w-full max-sm:hidden">
                <Container>
                    <div className="flex justify-start gap-20 items-center w-4/5 text-sm py-3 max-w-2xl:ml-0 ml-6">
                        {NavLinks.map((item) => (
                            <Link key={item.name} href={item.href} className={cn("text-themeBlue hover:text-themeColor", pathName === item.href ? 'text-themeColor' : '')}>{item.name}</Link>
                        ))}
                    </div>
                </Container>
            </div>
            <div className="sm:hidden">
                <Sheet>
                    <div className="flex justify-between items-center w-full p-2">
                        <Link href={'/'} className="min-w-[70px] max-w-[100px]">
                            <Image src={'/logo_green.png'} alt="IBFSA" width={120} height={120} layout="responsive" />
                        </Link>
                        <SheetTrigger>
                            <div>
                                <Menu />
                            </div>
                        </SheetTrigger>
                    </div>
                    <SheetContent>
                        <SheetHeader>
                            <SheetDescription className="py-6 text-justify">
                                <div className="flex flex-col justify-start gap-10 items-center mt-6 mb-10 text-base">
                                    {NavLinks.map((item) => (
                                        <Link key={item.name} href={item.href} className={cn("text-themeBlue hover:text-themeColor", pathName === item.href ? 'text-themeColor' : '')}>{item.name}</Link>
                                    ))}
                                </div>
                                <Separator />
                                <div className="flex flex-col justify-center items-center my-6 gap-6">
                                    <div className="font-semibold w-4/5">
                                        <span className="font-light">Address: </span>
                                        <span>Shop no.312, 3rd floor, Matoshri Plaza, Venus Corner, Kolhapur</span>
                                    </div>
                                    <Link href={'/tel:+919970114143'} className="font-semibold">
                                        <span className="font-light">Free Call: </span>
                                        <span className="min-w-max text-themeColor">+91 9970114143</span>
                                    </Link>
                                </div>
                                <Separator />
                                <div className="flex flex-col justify-center items-center w-full text-sm my-6 gap-6">
                                    <div className="flex items-center justify-evenly w-full">
                                        <Link href={'/'} className="bg-themeBlue text-white w-8 h-8 flex items-center justify-center rounded-lg">
                                            <Twitter className="w-5 h-5" />
                                        </Link>
                                        <Link href={'/'} className="bg-themeBlue text-white w-8 h-8 flex items-center justify-center rounded-lg">
                                            <Facebook className="w-5 h-5" />
                                        </Link>
                                        <Link href={'/'} className="bg-themeBlue text-white w-8 h-8 flex items-center justify-center rounded-lg">
                                            <Linkedin className="w-5 h-5" />
                                        </Link>
                                        <Link href={'/'} className="bg-themeBlue text-white w-8 h-8 flex items-center justify-center rounded-lg">
                                            <Instagram className="w-5 h-5" />
                                        </Link>
                                    </div>
                                    <p className="max-sm:w-max text-center text-xs">Opening Hours : <br /> Monday to Saturday - 10.00 AM to 8.00 PM</p>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default Navbar