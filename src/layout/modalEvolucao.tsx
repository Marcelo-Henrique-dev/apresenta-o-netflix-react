import * as Dialog from "@radix-ui/react-dialog";

export const ModalEvolucao = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="w-1/2 bg-slate-800 p-9 rounded-lg relative">
        <Dialog.Close className="text-white absolute -left-2 -top-2 px-3 py-1 bg-slate-700 rounded-md transition-all hover:scale-105">
          X
        </Dialog.Close>
        <h1 className="text-white text-2xl border-l-2 px-2 py-4 bg-slate-700 font-bold">
          Evolução
        </h1>
        <div className="flex gap-2">
          <ul className="text-white list-inside list-disc">
            <li className="my-3 px-2">Lançamento do Modelo de Assinatura</li>
            <li className="my-3 px-2">Introdução ao Streaming</li>
            <li className="my-3 px-2">Expanção Internacional</li>
            <li className="my-3 px-2">Produção de Conteúdo Original</li>
            <li className="my-3 px-2">Lançamento do Streaming Global</li>
            <li className="my-3 px-2">Crescimento Significativo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
