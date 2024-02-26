import { Container } from "../layout/container"
import logo from '../assets/logo.svg'
import { Aside } from "../layout/aside"
import streams from '../assets/slides/streamings.jpg'

export const Streamings = () => {
    return (
        <section className="absolute w-full h-full bg-black flex py-4" id="streamings">
            <Aside />
            <Container className="flex flex-col gap-4">
                <img className="max-w-80" src={logo} alt="Neflix" />
                <h1 className="text-white text-2xl font-bold border-b p-4">Streamings de Filmes e Séries</h1>
                <div className="flex w-full gap-2">
                    <img className="w-[80%]" src={streams} alt="streamings" />
                    <ul className="text-white text-xl">
                        <li className="border-b p-4 font-bold text-red-700 text-3xl">Netflix</li>
                        <li className="border-b p-4 font-bold">HBO Max</li>
                        <li className="border-b p-4 font-bold">Prime Vídeo</li>
                        <li className="border-b p-4 font-bold">Disney Plus</li>
                        <li className="border-b p-4 font-bold">AppleTV</li>
                    </ul>

                </div>
            </Container>
        </section>
    )
}