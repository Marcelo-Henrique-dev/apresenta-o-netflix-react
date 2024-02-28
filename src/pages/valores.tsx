import { Aside } from "../layout/aside";
import { Container } from "../layout/container";
import logo from "../assets/logo.svg";
import { Valor } from "../layout/valor";

import conhecimento from '../assets/valores/conhecimento.jpg'
import seguranca from '../assets/valores/privacidade.jpg'
import mobilidade from '../assets/valores/mobilidade.png'
import diversao from '../assets/valores/diversao.jpg'
import conforto from '../assets/valores/conforto.jpg'
import etica from '../assets/valores/etica.jpg'
import inspiracao from '../assets/valores/inspiracao.jpg'
import uniao from '../assets/valores/uniao.jpeg'

export const Valores = () => {
  return (
    <section id="valores" className="absolute w-full h-full flex">
      <Aside />
      <Container className="py-2">
        <img className="max-w-80" src={logo} alt="Neftlix" />
        <h1 className="text-white text-2xl border-b w-full p-4">Valores</h1>
        <div id="content" className="flex flex-wrap gap-4 justify-center py-20">
          <Valor valor="Segurança" img={seguranca} />
          <Valor valor="Conhecimento" img={conhecimento} />
          <Valor valor="Mobilidade" img={mobilidade} />
          <Valor valor="Diversão" img={diversao} />
          <Valor valor="Conforto" img={conforto} />
          <Valor valor="Ética" img={etica} />
          <Valor valor="Inspiração" img={inspiracao} />
          <Valor valor="União" img={uniao} />
        </div>
      </Container>
    </section>
  );
};
