import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mov1 from "../assets/movies/Rectangle 1.png"
import mov2 from '../assets/movies/Rectangle 2.png'
import mov3 from '../assets/movies/Rectangle 3.png'
import mov4 from '../assets/movies/Rectangle 4.png'
import mov5 from '../assets/movies/Rectangle 5.png'
import mov6 from '../assets/movies/Rectangle 6.png'
import mov7 from '../assets/movies/Rectangle 7.png'
import mov8 from '../assets/movies/Rectangle 8.png'
import mov9 from '../assets/movies/Rectangle 9.png'
import mov10 from '../assets/movies/Rectangle 10.png'
import mov11 from '../assets/movies/Rectangle 11.png'
import mov12 from '../assets/movies/Rectangle 12.png'
import mov13 from '../assets/movies/Rectangle 13.png'
import mov14 from '../assets/movies/Rectangle 14.png'
import mov15 from '../assets/movies/Rectangle 15.png'
import mov16 from '../assets/movies/Rectangle 16.png'

export const SliderReact = () => {

    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 11,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className="mx-auto p-8">
            <h1 className="text-white text-2xl p-4">Novidades da Semana</h1>
            <Slider {...settings} className="p-8">
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov1} alt="Movie1" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov2} alt="Movie2" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov3} alt="Movie3" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov4} alt="Movie4" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov5} alt="Movie5" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov6} alt="Movie6" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov7} alt="Movie7" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov8} alt="Movie8" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov9} alt="Movie9" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov10} alt="Movie10" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov11} alt="Movie11" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov12} alt="Movie12" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov13} alt="Movie13" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov14} alt="Movie14" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov15} alt="Movie15" />
                </a>
                <a href="" className="outline-none transition-all hover:scale-110">
                    <img src={mov16} alt="Movie16" />
                </a>
            </Slider>
        </div>
    )
}