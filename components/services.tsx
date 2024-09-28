import Container from "@/components/ui/container"
import ServicePoint from "./service-point"

const ServicesOffered = [
    {
        src: '/icons/guidance.svg',
        name: 'Personalised Counselling',
        description: 'Our team is committed to guide each individual personally with the right course.'
    },
    {
        src: '/icons/cv.svg',
        name: 'CV Evaluation',
        description: 'CVs are the first step in getting selected. We will evaluate your CV and give you feedback on the mistakes in your CV.'
    },
    {
        src: '/icons/learning.svg',
        name: 'Assessment',
        description: 'We evaluate each and every interested candidate by taking Assessment test. Test is followed by a Personal interview by an expert.'
    },
    {
        src: '/icons/training.svg',
        name: 'Training',
        description: 'We have a unique training methodology of Theory, Practical and Mentoring by experts. We focus on building your Knowledge, Skills and Attitude.'
    },
    {
        src: '/icons/interview.svg',
        name: 'Mock Interview',
        description: 'Mock Interviews helps candidate to get ready for the actual interview.'
    }
]

const Services = () => {
    return (
        <div className="py-10 sm:py-20">
            <Container>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-start justify-items-center justify-center gap-4 sm:gap-8 w-full">
                    <div>
                        <h1 className="title text-xl md:text-4xl xl:text-5xl max-sm:text-center text-start sm:leading-relaxed md:leading-snug xl:leading-snug capitalize"> The services we provide at <br className="md:hidden"/> <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl"> IBFSA </span></h1>
                    </div>
                    {
                        ServicesOffered.map((service, i) => (
                            <div key={i}>
                                <ServicePoint src={service.src} name={service.name} description={service.description} index={i} classname="p-4" />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Services