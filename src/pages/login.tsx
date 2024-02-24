import React, { useState } from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const user = {
    nome: 'Remo Ferreira',
    senha: '12345'
  }
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')

  function handleChangeNome(e: React.ChangeEvent<HTMLInputElement>){
    setNome(e.target.value)
  }
  function handleChangeSenha(e: React.ChangeEvent<HTMLInputElement>){
    setSenha(e.target.value)
  }

  function logar(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    user.nome == nome && user.senha == senha
      ? navigate('/home')
      : alert('Login ou senha errado')
  }

  return (
    <div
      className={`${styles.bg} absolute w-full h-full flex items-center justify-center after:bg-black after:w-full after:absolute after:h-full after:z-[-1]`}
      id="bg"
    >
      <div
        className="bg-black/75 w-1/4 p-16 flex gap-4 flex-col rounded-lg"
        id="loginContainer"
      >
        <h1 className="text-white font-netflix text-xl">Entrar</h1>
        <form className="flex flex-col gap-4 items-center">
          <input
            type="text"
            onChange={handleChangeNome}
            name="nome"
            className="w-full p-2 bg-gray-800 text-white placeholder:text-gray-500 rounded-md outline-none"
            placeholder="Email ou telefone"
          />
          <input
            type="password"
            name="senha"
            onChange={handleChangeSenha}
            className="w-full p-2 bg-gray-800 text-white placeholder:text-gray-500 rounded-md outline-none"
            placeholder="Senha"
          />
          <button
            onClick={logar}
            className="bg-red-600 w-full text-center text-white rounded-sm py-2 mt-4"
          >
            Entrar
          </button>
          <div id="options" className="flex flex-col items-center gap-2 w-full">
            <div className="flex items-center">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lembrar de mim
              </label>
            </div>
            <a className="text-white hover:underline" href="#">
              Precisa de Ajuda?
            </a>
          </div>
        </form>
        <div>
          <p className="text-gray-600">
            Novo por aqui? <br />
            <a href="#" className="text-white hover:underline">
              Cadastre-se agora
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
