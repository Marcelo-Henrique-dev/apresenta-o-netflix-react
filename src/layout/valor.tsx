export const Valor = (props: {valor: string, img: string}) =>{
    return(
        <div className="p-5 bg-white/10 rounded-xl flex flex-col gap-2 items-center w-1/5 transition-all hover:scale-105" id="alunoSingle">
            <img className="h-32 w-full rounded-md" src={props.img} alt={props.valor} />
            <h1 className="text-white">{props.valor}</h1>
        </div>
    )
}