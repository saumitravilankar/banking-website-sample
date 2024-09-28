import Container from "@/components/ui/container"
import { Button } from "./ui/button"
import Image from "next/image"

const AboutUsSection = () => {
    return (
        <div className="py-10 bg-white">
            <Container>
                <div className="flex w-full items-center justify-center">
                    <div className="flex-[1.5] space-y-6">
                        <h1 className="font-bold text-5xl text-amber-600">About Us</h1>
                        <p className="text-base leading-9">Aspiring Bankers is an initiative of the Institute of Professional Banking (IPB). In past seven years, IPB is one name synonymous with imparting quality training and providing assured placements in branch banking profiles of Private Sector Banks. It is thus remarkably doing tremendous job in eradicating unemployment from the nation. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas velit ratione voluptate quos. Quaerat corporis asperiores impedit nesciunt ab, quibusdam aperiam animi non eos deleniti? Assumenda minima doloribus laborum rerum.</p>
                        <Button className="rounded-none" variant={'default'} size={'lg'}>
                            Know More
                        </Button>
                    </div>
                    <div className="flex-1 flex items-center justify-end">
                        <div className="relative w-4/5 h-96">
                            <Image style={{ borderRadius: "100% 77% 72% 94% / 80% 100% 92% 86% " }} src={'/about.jpg'} alt="" fill objectFit="cover" objectPosition="top" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutUsSection