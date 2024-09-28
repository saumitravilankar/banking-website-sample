import Image from "next/image"
import HeroText from "./hero-text"
import Container from "./ui/container"

const Hero = () => {
    return (
        <>
            <div className="relative max-sm:h-96">
                <Image src={'/banker.png'} alt="" width={1920} height={762} layout="responsive" objectFit="cover" className="max-sm:hidden" />
                <Image src={'/banker.png'} alt="" fill objectFit="cover" className="sm:hidden" />
                <Container>
                    <HeroText />
                </Container>
            </div>
        </>
    )
}

export default Hero

