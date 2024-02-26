import { Container } from "../layout/container"
import logo from '../assets/logo.svg'
import { Aside } from "../layout/aside"

export const Streamings = () => {
    return(
        <section className="absolute w-full h-full bg-black flex p-4" id="streamings">
            <Aside name="/streaming" />
            <Container className="">
                <img className="max-w-80" src={logo} alt="Neflix" />
                <h1 className="text-white text-2xl font-bold border-b p-4">Streamings</h1>
            </Container>
        </section>
    )
}