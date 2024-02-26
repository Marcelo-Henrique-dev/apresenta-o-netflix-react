import { Aside } from "../layout/aside";
import { Container } from "../layout/container";
import logo from "../assets/logo.svg";
import streamings from "../assets/slides/streamings2.jpg";

export const Streamings2 = () => {
  return (
    <section className="absolute w-full h-full flex" id="streamings">
      <Aside />
      <Container className="flex flex-col py-4">
        <img src={logo} alt="" className="max-w-80" />
        <h1 className="text-white text-2xl p-4 border-b w-full">
          O Universo dos Streamings
        </h1>
        <div id="content" className="p-4 flex gap-2 items-center">
          <img src={streamings} alt="streamings" />
          <p className="text-white text-xl text-justify">
            O streaming revolucionou a forma como consumimos conteúdo,
            proporcionando aos usuários uma experiência única e inigualável.
            Neste trabalho, exploraremos os valores positivos que o streaming
            oferece aos seus usuários, destacando suas funcionalidades que
            tornam essa forma de entretenimento tão cativante.
          </p>
        </div>
      </Container>
    </section>
  );
};
