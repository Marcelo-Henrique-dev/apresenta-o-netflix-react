import * as Dialog from "@radix-ui/react-dialog";
import criadores from '../assets/slides/criadoresNetflix.jpg'

export const BtnModal = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger
                className="px-8 py-2 bg-red-700 text-white rounded-full outline-none transition-all hover:scale-105">
                Play
            </Dialog.Trigger>

            <Dialog.Content>
                <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/60 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-1/2 bg-slate-800 p-9 rounded-lg relative">
                        <Dialog.Close className="text-white absolute -left-2 -top-2 px-3 py-1 bg-slate-700 rounded-md transition-all hover:scale-105">
                            X
                        </Dialog.Close>
                        <h1 className="text-white text-2xl border-l-2 px-2 py-4 bg-slate-700 font-bold">Fundação</h1>
                        <div className="flex gap-2">
                            <p className="text-white text-xl p-8">Reed Hastings e Marc Randolph fundaram a Netflix em 1997. <br />
                                Inicialmente, a empresa operava como um serviço de aluguel de DVDs online e continua em atualização até hoje.
                            </p>
                            <img className="max-w-[500px] p-4" src={criadores} alt="" />
                        </div>
                    </div>
                </div>
            </Dialog.Content>
        </Dialog.Root>
    )
}