import "./App.css";
import React, { useState } from "react";

import { AiFillHtml5 } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`container ${isDarkMode ? "dark" : ""}`}>
      <header>
        <h1 className="logo">VB</h1>

        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#projeto">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <button onClick={handleToggleDarkMode}>
                {isDarkMode ? "Modo Escuro" : "Modo Claro"}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Entrada - sessão 01 */}
      <section className="section-intro" id="home">
        <div className="box-intro">
          <h3>Olá, meu nome é</h3>
          <h1>
            <span>Victor Santos Barreto</span>
          </h1>
          <h3>
            Sou <span>Desenvolvedor Front-End</span>
          </h3>
        </div>

        <div className="img">
          <img src="profile.png" alt="Perfil" />
        </div>
      </section>

      {/* Sobre mim - sessão 02 */}
      <section className="section-about" id="sobre">
        <h2>Sobre Mim</h2>

        <div className="box-about">
          <p>
            Tenho 21 anos e atualmente estou cursando ensino superior em Sistema
            de Informação na Unit. Sou um entusiasta da tecnologia e estou
            sempre em busca de conhecimento para desenvolver soluções criativas
            e funcionais que possam agregar valor a projetos.
          </p>
          <p>
            Meu objetivo é encontrar uma oportunidade na área, onde eu possa
            continuar me aprimorando e me tornando um profissional completo,
            contribuindo assim para o sucesso da empresa.
          </p>
        </div>
      </section>

      {/* tecnologia - sessão 03 */}
      <section className="section-tech">
        <h2>Tecnologias que possuo conhecimento</h2>

        <div className="tech">
          <div className="box-tech">
            <AiFillHtml5 className="icon" />
            <p>HTML</p>
          </div>
          <div className="box-tech">
            <IoLogoCss3 className="icon" />
            <p>CSS</p>
          </div>
          <div className="box-tech">
            <IoLogoJavascript className="icon" />
            <p>JavaScript</p>
          </div>
          <div className="box-tech">
            <IoLogoReact className="icon" />
            <p>ReactJS</p>
          </div>
          <div className="box-tech">
            <SiStyledcomponents className="icon" />
            <p>Styled Components</p>
          </div>
          <div className="box-tech">
            <IoLogoPython className="icon" />
            <p>Python</p>
          </div>
          <div className="box-tech">
            <FaJava className="icon" />
            <p>Java</p>
          </div>
        </div>
      </section>

      {/* Projeto - sessão 04 */}
      <section className="section-project" id="projeto">
        <h2>Meus Projetos</h2>

        <div className="box-project">
          <div className="project">
            <a
              href="https://github.com/V1ct0rSb/Bora-Codar-Desafio06"
              target="_blank"
            >
              <img src="01.png" alt="Perfil" />
            </a>
          </div>
          <div className="project">
            <a
              href="https://github.com/V1ct0rSb/Bora-Codar-Desafio04"
              target="_blank"
            >
              <img src="02.png" alt="Perfil" />
            </a>
          </div>
          <div className="project">
            <a href="https://github.com/V1ct0rSb/Marketplace" target="_blank">
              <img src="03.png" alt="Perfil" />
            </a>
          </div>
          <div className="project">
            <a
              href="https://github.com/V1ct0rSb/GiveBoostReact"
              target="_blank"
            >
              <img src="04.png" alt="Perfil" />
            </a>
          </div>
          <div className="project">
            <a
              href="https://github.com/V1ct0rSb/Bora-Codar-Desafio02"
              target="_blank"
            >
              <img src="05.png" alt="Perfil" />
            </a>
          </div>
        </div>
      </section>

      {/* Contato - sessão 05 */}
      <section className="section-contact" id="contato">
        <h2>Contato</h2>

        <div className="box-contact">
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/victor-barreto-6a3129258/"
              target="_blank"
            >
              <button>
                <AiFillLinkedin className="icon" />
                <p>Victor Barreto</p>
              </button>
            </a>
          </div>
          <div className="contact">
            <a href="#">
              <button>
                <AiOutlineMail className="icon" />
                <p>denvictor.sbarreto@gmail.com</p>
              </button>
            </a>
          </div>
          <div className="contact">
            <a href="https://github.com/V1ct0rSb" target="_blank">
              <button>
                <AiFillGithub className="icon" />
                <p>V1ct0rSb</p>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
