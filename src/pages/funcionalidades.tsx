import { Aside } from "../layout/aside";
import { Container } from "../layout/container";
import logo from "../assets/logo.svg";

export const Funcionalidades = () => {
  return (
    <section id="valores" className="absolute w-full h-full flex">
      <Aside />
      <Container className="py-2">
        <img className="max-w-80" src={logo} alt="Neftlix" />
        <h1 className="text-white text-2xl border-b w-full p-4">Funcionalidades</h1>
        <div id="content" className="flex flex-wrap gap-4 justify-center py-20">
            <ul className="text-white flex flex-wrap gap-4 justify-center">
              <li className="border-b p-4 text-center w-1/4">Séries e Filmes Originais</li>
              <li className="border-b p-4 text-center w-1/4">Acesso Ilimitado</li>
              <li className="border-b p-4 text-center w-1/4">Categorias</li>
              <li className="border-b p-4 text-center w-1/4">Senha</li>
              <li className="border-b p-4 text-center w-1/4">Catálogo</li>
              <li className="border-b p-4 text-center w-1/4">Download</li>
              <li className="border-b p-4 text-center w-1/4">Favoritar</li>
              <li className="border-b p-4 text-center w-1/4">Filtro</li>
              <li className="border-b p-4 text-center w-1/4">Usuários</li>
              <li className="border-b p-4 text-center w-1/4">Interação e Participação</li>
              <li className="border-b p-4 text-center w-1/4">Assinaturas e valores</li>
              <li className="border-b p-4 text-center w-1/4">Minha Lista</li>
            </ul>
        </div>
      </Container>
    </section>
  );
};
