import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import '../../styles/StyleGeneral.css';
import ListComponent from "../../components/ListNavigation/ListComponent";
import imgPerfil from "../../assets/user/perfil_user.svg";

function About() {
    return (
        <div>
            <HeaderComponent />
            <div className="flex justify-between items-center px-16">
                <div className="w-2/5 flex flex-col">
                    <div className="mb-4">
                        <h1 className="font-semibold text-6xl mb-4">A cerca de mi</h1>
                        <p className="w-auto">
                            Frontend Developer, bachiller de la carrera de Ing. Sistemas.
                            Busco ampliar y fortalecer mis conocimientos y experiencia,
                            brindando soluciones innovadoras a problemas, utilizando
                            herramientas digitales y agregando valor al usuario y a las
                            empresas.
                        </p>
                    </div>
                    <div>
                        <button className="relative px-5 py-2 group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-color-green group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 bg-border-green group-hover:bg-color-green"></span>
                            <span className="relative flex items-center gap-2 text-black group-hover:text-black">
                                Curriculum Vitae
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5001 16.6667L7.29175 11.4584L8.75008 9.948L11.4584 12.6563V4.16675H13.5417V12.6563L16.2501 9.948L17.7084 11.4584L12.5001 16.6667ZM6.25008 20.8334C5.67716 20.8334 5.18689 20.6296 4.77925 20.222C4.37161 19.8143 4.16744 19.3237 4.16675 18.7501V15.6251H6.25008V18.7501H18.7501V15.6251H20.8334V18.7501C20.8334 19.323 20.6296 19.8136 20.222 20.222C19.8143 20.6303 19.3237 20.8341 18.7501 20.8334H6.25008Z" fill="#00AE7A" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img className="image" src={imgPerfil} alt="Imagen del Perfil" />
                </div>
                <div className="relative">
                    <ListComponent />
                </div>
            </div>
        </div>
    );
}

export default About;
