import { BiPlus } from "react-icons/bi"
import { CiMonitor } from "react-icons/ci"
import { FaHome, FaRandom, FaSearch } from "react-icons/fa"
import { GrAnalytics } from "react-icons/gr"
import { PiFilmSlate } from "react-icons/pi"
import { useLocation } from "react-router-dom"

export const Aside = () => {
    
    const location = useLocation()
    const nome = location.pathname

    return (
        <aside className="flex flex-col justify-center items-center w-28 p-8" id="menuLateral">
            <div className="flex flex-col gap-12 text-2xl text-white">
                <a className={`${nome === '/search' ? 'border-b-2' : ''} border-red-600 p-1`} id="/search" href="#"><FaSearch /></a>
                <a className={`${nome === '/streaming' ? 'border-b-2' : ''} border-red-600 p-1`} id="/streaming" href="/streaming"><CiMonitor /></a>
                <a className={`${nome === '/streamings' ? 'border-b-2' : ''} border-red-600 p-1`} id="/streamings" href="/streamings"><PiFilmSlate /></a>
                <a className={`${nome === '/graficos' ? 'border-b-2' : ''} border-red-600 p-1`} id="/graficos" href="/graficos"><GrAnalytics /></a>
                <a className={`${nome === '/home' ? 'border-b-2' : ''} border-red-600 p-1`} id="/home" href="/home"><FaHome /></a>
                <a className={`${nome === '/valores' ? 'border-b-2' : ''} border-red-600 p-1`} id="/valores" href="/valores"><BiPlus /></a>
                <a className={`${nome === '/funcionalidades' ? 'border-b-2' : ''} border-red-600 p-1`} id="/funcionalidades" href="/funcionalidades"><FaRandom /></a>
            </div>
        </aside>
    )
}
