import logo from "../assets/logo.svg";
import mundi from "../assets/slides/top10.jpg";
import br from "../assets/slides/brasil.jpg";
import { Aside } from "../layout/aside";
import { Container } from "../layout/container";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalMundo } from "../layout/modalMundo";
import { ModalBrasil } from "../layout/modalBrasil";

export const Graficos = () => {
  return (
    <section
      className="bg-black absolute w-full h-full flex py-4"
      id="graficos"
    >
      <Aside />
      <Container className="flex flex-col gap-4 items-center">
        <img className="max-w-80" src={logo} alt="Netflix" />
        <div className="flex gap-8">
          <Dialog.Root>
            <div className="flex flex-col items-center" id="containerGraphs">
              <h1 className="text-white border-b p-4 w-full text-2xl text-center">
                Países que mais usam
              </h1>
              <Dialog.Trigger className="mt-4">
                <img className="max-h-[500px]" src={mundi} alt="Mundo" />
              </Dialog.Trigger>
              <Dialog.Content>
                <ModalMundo />
              </Dialog.Content>
            </div>
          </Dialog.Root>
          <Dialog.Root>
            <div className="flex flex-col items-center" id="containerGraphs">
              <h1 className="text-white border-b p-4 w-full text-2xl text-center">
                Mais usados no Brasil
              </h1>
              <Dialog.Trigger className="mt-4">
                <img className="max-h-[500px]" src={br} alt="Brasil" />
              </Dialog.Trigger>
              <Dialog.Content>
                <ModalBrasil />
              </Dialog.Content>
            </div>
          </Dialog.Root>
        </div>
      </Container>
    </section>
  );
};
