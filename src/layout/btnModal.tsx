import * as Dialog from "@radix-ui/react-dialog";
import { ModalHistoria } from "./modalHistoria";
import { ModalEvolucao } from "./modalEvolucao";

export const BtnModal = (props: {nome: string}) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger
                className={`px-8 py-2 text-white rounded-full outline-none transition-all hover:scale-105 ${props.nome === 'Play' ? 'bg-red-700' : 'bg-slate-400'}`}>
                {props.nome}
            </Dialog.Trigger>

            <Dialog.Content>
                {
                    props.nome === 'Play'
                        ? <ModalHistoria />
                        : <ModalEvolucao />
                }
            </Dialog.Content>
        </Dialog.Root>
    )
}