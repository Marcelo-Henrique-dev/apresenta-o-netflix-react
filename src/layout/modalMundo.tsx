import * as Dialog from "@radix-ui/react-dialog";

export const ModalMundo = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/2 bg-slate-800 p-9 rounded-lg relative">
        <Dialog.Close className="text-white absolute -left-2 -top-2 px-3 py-1 bg-slate-700 rounded-md transition-all hover:scale-105">
          X
        </Dialog.Close>
        <h1 className="text-white text-2xl border-l-2 px-2 py-4 bg-slate-700 font-bold">
          Países que mais usam streamings
        </h1>
        <p className="text-white text-xl p-8 text-justify">
          Através de um estudo realizado pela plataforma de desconto
          <a href="http://cupumvalido.com.br" target="_blank" className="font-bold"> Cupom Válido</a>, que compilou dados da Statista e JustWatch,
          descobriram que os brasileiros estão em 2ª lugar entre os que mais
          utilizam serviços de streaming no mundo, somente atrás dos Estados
          Unidos. <br />
          Em seguida ficam Reino Unido e Alemanha, em terceiro e quarto
          lugar, respectivamente
        </p>
      </div>
    </div>
  );
};
