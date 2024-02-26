export const Aluno = (props: {img: string, nome: string}) => {
    return(
        <div className="p-5 bg-white/10 rounded-xl flex flex-col gap-2 items-center w-1/6" id="alunoSingle">
            <img className="w-40 rounded-xl max-h-52" src={props.img} alt={props.nome} />
            <h1 className="text-white text-center font-bold text-2xl">{props.nome}</h1>
        </div>
    )
}