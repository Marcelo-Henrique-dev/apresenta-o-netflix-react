import * as Dialog from "@radix-ui/react-dialog";

export const ModalBrasil = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/2 bg-slate-800 p-9 rounded-lg relative">
        <Dialog.Close className="text-white absolute -left-2 -top-2 px-3 py-1 bg-slate-700 rounded-md transition-all hover:scale-105">
          X
        </Dialog.Close>
        <h1 className="text-white text-2xl border-l-2 px-2 py-4 bg-slate-700 font-bold">
          Streamings mais usados no Brasil - <span className="text-red-800 font-bold">Netflix</span>
        </h1>
        <p className="text-white text-xl p-8 text-justify">
          O estudo revela que a plataforma possui 31% de participação de
          mercado. <br />
          Em segundo lugar, fica a Amazon Prime Video (24%) e em
          terceiro lugar, a Disney Plus, com 12% de participação de mercado. <br />
          Os 3 principais tipos de séries preferidos pelos brasileiros são: drama
          (47,8%), ação (18,3%) e comédia (16%).
        </p>
      </div>
    </div>
  );
};
