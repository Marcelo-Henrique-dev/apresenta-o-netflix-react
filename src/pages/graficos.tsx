import logo from '../assets/logo.svg'
import mundi from '../assets/slides/top10.jpg'
import br from '../assets/slides/brasil.jpg'
import { Aside } from "../layout/aside"
import { Container } from '../layout/container'

export const Graficos = () => {
    return (
        <section className="bg-black absolute w-full h-full flex py-4" id="graficos">
            <Aside />
            <Container className='flex flex-col gap-4 items-center'>
                <img className='max-w-80' src={logo} alt="Netflix" />
                <div className='flex items-center' id='containerGraphs'>
                    <div className='w-1/2 flex flex-col gap-2 p-8 items-center'>
                        <h1 className='border-b text-center text-white text-2xl font-bold p-4'>Top 10 Mundo</h1>
                        <img className='w-[500px] max-h-[640px]' src={mundi} alt="" />
                    </div>
                    <div className='w-1/2 flex flex-col gap-2 p-8 items-center'>
                        <h1 className='border-b text-center text-white text-2xl font-bold p-4'>Top 10 Brasil</h1>
                        <img className='w-[500px] max-h-[640px]' src={br} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}