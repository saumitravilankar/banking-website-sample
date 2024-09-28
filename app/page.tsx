import ContactSection from '@/components/contact-section'
import Count from '@/components/count'
import CourseSection from '@/components/course-section'
import Hero from '@/components/hero'
import HeroPoints from '@/components/hero-points'
import OurRecruiters from '@/components/our-recruiters'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <HeroPoints />
      <OurRecruiters />
      <Services />
      <Count />
      <CourseSection />
      <Testimonials />
      <ContactSection />
    </>
  )
}
