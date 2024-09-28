import Container from "@/components/ui/container"
import HeroPoint from "@/components/hero-point"

const Skills = [
    {
        src: '/icons/career-ready-skills.svg',
        name: 'Career-Ready Skills',
        description: 'Develop the skills needed to secure a job and build a thriving career in the BFSI sector.'
    },
    {
        src: '/icons/learning.svg',
        name: 'Holistic Development',
        description: 'Comprehensive courses cover technical, interpersonal skills, and personal growth.'
    },
    {
        src: '/icons/education.svg',
        name: 'Real-Life Learning',
        description: 'Practical scenarios help you grasp BFSI sector intricacies.'
    },
    {
        src: '/icons/guidance.svg',
        name: 'Personalized Guidance',
        description: 'Individual attention and assessment tests ensure your success, with mentors from industry experts.'
    },
]

const HeroPoints = () => {
    return (
        <div className="-mt-3 sm:-mt-4 lg:-mt-8 xl:-mt-10 relative z-10">
            <Container>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-start gap-5 md:gap-7 xl:gap-10 pb-12 lg:pb-16 xl:pb-20">
                    {
                        Skills.map((skill, i) => (
                            <HeroPoint key={i} src={skill.src} name={skill.name} description={skill.description} index={i} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default HeroPoints