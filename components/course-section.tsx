import Link from "next/link"
import CourseTitle from "./course-title"
import Courses from "./courses"
import { Button } from "./ui/button"
import Container from "./ui/container"

const CourseSection = () => {
    return (
        <div className="py-20">
            <Container>
                <div className="space-y-2 w-full text-center">
                    <CourseTitle title={'Our Training Program'} tagline={'Unlock the Future of Banking.'} />
                </div>
                <div className="flex max-sm:flex-col items-center justify-center py-6 gap-4 sm:gap-9 sm:py-8 lg:py-10 xl:py-12 overflow-hidden">
                    <Courses />
                </div>
                <Link href={'/post-graduation-diploma-in-banking&finance'} className="w-full justify-center items-center flex">
                    <Button className="rounded-none w-[200px]" variant={'default'} size={'lg'} >Explore</Button>
                </Link>
            </Container>
        </div>
    )
}

export default CourseSection