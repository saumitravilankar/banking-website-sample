import Container from "@/components/ui/container"

type Props = {
    title: string
}

const PageTitle = ({ title }: Props) => {
    return (
        <div className="relative bg-count bg-cover bg-no-repeat bg-fixed bg-top">
            <Container>
                <h1 className="text-7xl font-black text-white tracking-wide text-center py-32 relative z-10">{title}</h1>
            </Container>
            <div className='absolute top-0 left-0 w-full h-full bg-slate-800 bg-opacity-30 z-1' />
        </div>
    )
}

export default PageTitle