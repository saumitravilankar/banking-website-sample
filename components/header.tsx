import Container from "@/components/ui/container"
import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

function Header() {
    return (
        <div className="w-full bg-themeBlue">
            <Container>
                <div className="flex justify-between items-center w-full text-xs text-white py-1 sm:py-2">
                    <div className="flex items-center space-x-4 sm:space-x-8 max-w-2xl:ml-0 sm:ml-6">
                        <Link href={'/'}>
                            <Twitter className="w-2 sm:w-4 h-4 sm:h-4" />
                        </Link>
                        <Link href={'/'}>
                            <Facebook className="w-2 sm:w-4 h-4 sm:h-4" />
                        </Link>
                        <Link href={'/'}>
                            <Linkedin className="w-2 sm:w-4 h-4 sm:h-4" />
                        </Link>
                        <Link href={'/'}>
                            <Instagram className="w-2 sm:w-4 h-4 sm:h-4" />
                        </Link>
                    </div>
                    <p className="max-sm:w-max max-sm:text-[8px] max-sm:leading-5 max-sm:text-end sm:tracking-wide">Opening Hours : Monday to Saturday - 10.00 AM to 8.00 PM</p>
                </div>
            </Container>
        </div>
    )
}

export default Header