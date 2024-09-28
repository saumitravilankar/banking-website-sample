import React from 'react'
import Container from './ui/container'
import ServicePoint from './service-point'

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
    },
    {
        src: '/icons/winner.svg',
        name: 'Accreditation',
        description: 'Recognized certification ensuring high-quality education.'
    }
]

const CourseAbout = () => {
    return (
        <div className='py-14 lg:py-20 bg-slate-50'>
            <Container>
                <div className='space-y-6 sm:space-y-8'>
                    <h1 className='title text-start font-bold'>About the course</h1>
                    <p className='text-themeBlue leading-8'>
                        Are you ready to step into the dynamic world of banking and finance? Our Post Graduation Diploma in Banking & Finance is designed to equip you with the essential skills and knowledge needed for a successful career in this industry. Through a comprehensive virtual training program, we bring the expertise of the banking sector right to your doorstep.
                    </p>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 items-start justify-items-center justify-center gap-4 sm:gap-8 w-full'>
                        {
                            ServicesOffered.map((service, i) => (
                                <div key={i}>
                                    <ServicePoint src={service.src} name={service.name} description={service.description} index={i} classname="p-4 bg-white rounded-lg" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CourseAbout