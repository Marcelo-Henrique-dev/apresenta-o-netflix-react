import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import marcelo from '../assets/perfis/marcelo.png'
import clerisson from '../assets/perfis/cafe.jpg'
import marcos from '../assets/perfis/marcos.jpg'
import josysllan from '../assets/perfis/josysllan.jpg'
import junior from '../assets/perfis/junior.jpg'
import { Aluno } from '../layout/aluno'
import styles from './home.module.css'

export const Alunos = () => {

    const navigate = useNavigate()

    function goHome(){
        navigate('/home')
    }

    return(
        <section id="alunos" className={`${styles.bgAlunos} absolute w-full h-full after:absolute, w-full, h-full, bg-black flex flex-col gap-4 justify-center items-center`}>
            <img src={logo} alt="Netflix" className='max-w-80 bg-black/80 p-4 rounded-lg' />
            <div id='alunosContainer' className='flex flex-wrap w-full max-w-7xl bg-black rounded-xl p-8 justify-around'>
                <Aluno img={marcelo} nome="Marcelo Henrique" />
                <Aluno img={clerisson} nome="Clerisson Teixeira" />
                <Aluno img={marcos} nome="Marcos Vinícius" />
                <Aluno img={josysllan} nome="Josysllan Wislly" />
                <Aluno img={junior} nome="Luiz Orlando" />
            </div>
            <button className='text-black/80 bg-red-700 py-4 px-8 rounded-xl text-xl font-bold transition-all hover:scale-105 hover:text-white' onClick={goHome}>Apresentação</button>
        </section>
    )
}