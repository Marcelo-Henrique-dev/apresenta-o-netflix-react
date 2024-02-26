import original from '../assets/netflix.svg'
import imdb from '../assets/imdb.svg'
import styles from './home.module.css'
import { SliderReact } from "../layout/sliderReact"
import { BtnModal } from "../layout/btnModal"
import { Aside } from "../layout/aside"

export const Home = () => {
    return (
        <section className="w-full h-full flex absolute bg-black" id="home">
            <Aside />
            <div id="content" className="w-full flex flex-col overflow-hidden">
                <div id="destaque" className="flex justify-between min-h-[400px] w-full">
                    <div id="info" className="p-8 flex flex-col justify-around gap-4">
                        <img src={original} alt="Netflix Original Series" className="max-w-20" />
                        <h1 className="text-white text-5xl font-bold">Origem da <span className="text-red-700">Netflix</span></h1>
                        <p className="text-white text-2xl text-center">Parte 1</p>
                        <div className="flex gap-2 py-4">
                            <img src={imdb} alt="" />
                            <p className="text-white">10 / 10</p>
                        </div>
                        <p className="text-white"><span className="text-red-700 font-bold">2B+</span> Visualizações</p>
                        <div id="btns" className="flex gap-4 py-4">
                            <BtnModal />
                            <button className="px-8 py-2 bg-slate-300 text-black rounded-full">Trailer</button>
                        </div>
                    </div>
                    <div id="imgDestaque" className={`${styles.bgCriador} w-[75%]`} />
                </div>
                <div className="w-full mt-10">
                    <SliderReact />
                </div>
            </div>
        </section>
    )
}