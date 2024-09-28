import { ContactForm } from "@/components/ui/contact-form"
import Container from "@/components/ui/container"

const ContactSection = () => {
    return (
        <div className="bg-slate-50 py-14 sm:py-20">
            <Container>
                <div className="flex max-lg:flex-col items-center justify-center w-full gap-10">
                    <div className="flex-1 w-full h-full flex justify-center items-center border bg-white rounded-md">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4810407536065!2d74.22972807490615!3d16.702833122165256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1006dae654f03%3A0x6f3b3a04624a4696!2sDON%20RIDERS!5e0!3m2!1sen!2sin!4v1699012898259!5m2!1sen!2sin" width="100%" height="700" style={{ border: "none" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex-1 w-full h-full flex flex-col justify-start items-center border bg-white gap-6 py-14 rounded-md">
                        <h1 className="text-5xl font-black text-start text-themeColor">Contact Us</h1>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactSection