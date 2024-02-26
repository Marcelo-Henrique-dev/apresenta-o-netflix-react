import { Aside } from "../layout/aside";
import { Container } from "../layout/container";
import logo from "../assets/logo.svg";
import { Valor } from "../layout/valor";

import conhecimento from '../assets/valores/conhecimento.jpg'
import privacidade from '../assets/valores/privacidade.jpg'
import mobilidade from '../assets/valores/mobilidade.png'
import diversao from '../assets/valores/diversao.jpg'

export const Valores = () => {
  return (
    <section id="valores" className="absolute w-full h-full flex">
      <Aside />
      <Container className="py-2">
        <img className="max-w-80" src={logo} alt="Neftlix" />
        <h1 className="text-white text-2xl border-b w-full p-4">Valores</h1>
        <div id="content" className="flex flex-wrap gap-4 justify-center py-20">
          <Valor valor="Privacidade" img={privacidade} />
          <Valor valor="Conhecimento" img={conhecimento} />
          <Valor valor="Mobilidade" img={mobilidade} />
          <Valor valor="Diversão" img={diversao} />
          <Valor valor="Diversão" img={diversao} />
          <Valor valor="Diversão" img={diversao} />
          <Valor valor="Diversão" img={diversao} />
          <Valor valor="Diversão" img={diversao} />
        </div>
      </Container>
    </section>
  );
};
