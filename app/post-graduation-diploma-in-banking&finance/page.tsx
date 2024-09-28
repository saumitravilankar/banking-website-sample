import ContactSection from "@/components/contact-section"
import CourseAbout from "@/components/course-about"
import CourseInfo from "@/components/course-info"
import Eligibility from "@/components/eligibility"
import OurRecruiters from "@/components/our-recruiters"
import SelectionProcess from "@/components/selection-process"
import Testimonials from "@/components/testimonials"

type Props = {}

const CoursePage = (props: Props) => {
    return (
        <div>
            <CourseInfo />
            <CourseAbout />
            <Eligibility />
            <SelectionProcess />
            <OurRecruiters />
            <Testimonials />
            <ContactSection />
        </div>
    )
}

export default CoursePage