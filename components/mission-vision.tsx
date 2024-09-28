import Image from "next/image"
import Container from "./ui/container"
import MissionVissionContent from "./mission-vission-content"

const MissionVission = () => {
    return (
        <div className="lg:py-14">
            <Container>
                <div className="flex lg:flex-row flex-col items-center justify-center">
                    <div className="flex-1 max-lg:min-w-full">
                        <div className="relative h-[50vh] sm:h-[70vh] lg:h-[30rem] w-full">
                            <Image src={'/mission.jpg'} alt="mission" fill objectFit="cover" objectPosition="center" />
                        </div>
                    </div>
                    <div className="flex-1 lg:h-[30rem] bg-themeColor">
                        <div className="flex max-lg:py-14 justify-center items-center h-full">
                            <MissionVissionContent heading="Our Mission" content="IBFSA's mission is to provide affordable skill training, bridging industry skill gaps through a unique learning approach. We empower the nation's youth with high-quality content and extensive research, preparing them to meet the growing industry demands. Our dedication is to produce industry-ready professionals who adapt to the evolving BFSI sector. We are committed to both learner and industry success, contributing to the nation's economic growth and development." />
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col-reverse items-center justify-center">
                    <div className="flex-1 lg:h-[30rem] bg-themeBlue">
                        <div className="flex max-lg:py-14 justify-center items-center h-full">
                            <MissionVissionContent heading="Our Vision" content="IBFSA's vision is to establish itself as the unrivaled leader in the BFSI Skill training domain, consistently delivering outstanding results. Our unwavering commitment is to serve all stakeholders with maximum efficiency. We aim to be a symbol of excellence, guiding both our learners and partners towards success in the industry. We endeavor to lead by example, setting new standards in BFSI skill training and shaping the future of the sector." />
                        </div>
                    </div>
                    <div className="flex-1 max-lg:min-w-full">
                        <div className="relative h-[50vh] sm:h-[70vh] lg:h-[30rem] w-full">
                            <Image src={'/vision.jpg'} alt="vission" fill objectFit="cover" objectPosition="center" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MissionVission