import * as Dialog from "@radix-ui/react-dialog";

export const BtnModal = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger
                className="px-8 py-2 bg-red-700 text-white rounded-full outline-none">
                Play
            </Dialog.Trigger>

            <Dialog.Content>
                <div className="absolute top-0 left-0 w-full h-full z-[1] bg-black/60 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-1/2 bg-slate-800 p-9 rounded-lg relative">
                        <Dialog.Close className="text-white absolute left-0 top-0 px-3 py-1 bg-slate-700 rounded-md">
                            X
                        </Dialog.Close>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nihil illo voluptatum velit eius voluptate neque, ea consectetur accusantium? Laudantium possimus eos incidunt alias sit iure, numquam nam a sed?</p>
                    </div>
                </div>
            </Dialog.Content>
        </Dialog.Root>
    )
}