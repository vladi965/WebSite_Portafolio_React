import React from "react";
import imgPerfil from "../../assets/user/perfil_user.svg";
import ListComponent from "../ListNavigation/ListComponent";
import "../../styles/StyleGeneral.css";

function BodyComponent() {
    return (
        <div>
            <div className="flex justify-between items-center px-16">
                <div>
                    <div className="w-auto">
                        <h1 className="title text-8xl font-semibold pb-5">Vladimir</h1>
                        <h1 className="text-8xl font-semibold pb-5">Sanchez</h1>
                    </div>
                    <div className="flex gap-3 items-center">
                        <hr className="raya" />
                        <h4 className="font-semibold text-3xl">
                            Frontend <span className="title">Developer</span>
                        </h4>
                    </div>
                    <div className="flex flex-row items-center mt-6">
                        <ul className="flex gap-5">
                            <li>
                                <a
                                    className="hover-svg"
                                    target="_blank"
                                    href="https://github.com/vladi965"
                                    rel="noreferrer"
                                >
                                    {/* icon GitHub */}
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 29 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.875 22.9583C5.67917 24.65 5.67917 19.9375 3.625 19.3333M18.125 25.375V21.1458C18.125 19.9375 18.2458 19.4542 17.5208 18.7292C20.9042 18.3667 24.1667 17.0375 24.1667 11.4792C24.1652 10.0352 23.6018 8.64842 22.5958 7.6125C23.0676 6.35821 23.0242 4.96822 22.475 3.74583C22.475 3.74583 21.1458 3.38334 18.2458 5.31667C15.7896 4.67696 13.2104 4.67696 10.7542 5.31667C7.85417 3.38334 6.525 3.74583 6.525 3.74583C5.97579 4.96822 5.93235 6.35821 6.40417 7.6125C5.39817 8.64842 4.8348 10.0352 4.83333 11.4792C4.83333 17.0375 8.09583 18.3667 11.4792 18.7292C10.7542 19.4542 10.7542 20.1792 10.875 21.1458V25.375"
                                            stroke="#141414"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover-svg-two"
                                    target="_blank"
                                    href="https://twitter.com/vladi2596"
                                    rel="noreferrer"
                                >
                                    {/* icon twitter */}
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 29 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22.0446 2.71875H26.0435L17.3095 12.6988L27.5841 26.2812H19.5411L13.237 18.0457L6.03232 26.2812H2.02783L11.3679 15.6045L1.51807 2.71875H9.76494L15.4573 10.2463L22.0446 2.71875ZM20.6399 23.891H22.8546L8.5585 4.98438H6.17959L20.6399 23.891Z"
                                            fill="#141414"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover-svg"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/vladimir-sanchez-astoray/"
                                    rel="noreferrer"
                                >
                                    {/* icon linkedin */}
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 29 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.3334 9.66669C21.2562 9.66669 23.1003 10.4305 24.4599 11.7902C25.8196 13.1498 26.5834 14.9939 26.5834 16.9167V25.375H21.7501V16.9167C21.7501 16.2757 21.4955 15.6611 21.0423 15.2078C20.589 14.7546 19.9744 14.5 19.3334 14.5C18.6925 14.5 18.0778 14.7546 17.6246 15.2078C17.1714 15.6611 16.9167 16.2757 16.9167 16.9167V25.375H12.0834V16.9167C12.0834 14.9939 12.8473 13.1498 14.2069 11.7902C15.5665 10.4305 17.4106 9.66669 19.3334 9.66669ZM2.41675 10.875H7.25008V25.375H2.41675V10.875Z"
                                            stroke="#141414"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M4.83341 7.25002C6.1681 7.25002 7.25008 6.16804 7.25008 4.83335C7.25008 3.49867 6.1681 2.41669 4.83341 2.41669C3.49873 2.41669 2.41675 3.49867 2.41675 4.83335C2.41675 6.16804 3.49873 7.25002 4.83341 7.25002Z"
                                            stroke="#141414"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover-svg-two"
                                    target="_blank"
                                    href="https://codesandbox.io/u/vladi9626"
                                    rel="noreferrer"
                                >
                                    {/* icon codesandbox */}
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 29 29"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M25.23 7.69295L15.2613 2.23506C15.0282 2.10634 14.7663 2.03882 14.5 2.03882C14.2337 2.03882 13.9718 2.10634 13.7387 2.23506L3.77 7.69182C3.52039 7.82839 3.31212 8.0296 3.16703 8.27435C3.02193 8.5191 2.94535 8.79838 2.94531 9.08291V19.9171C2.94535 20.2017 3.02193 20.4809 3.16703 20.7257C3.31212 20.9704 3.52039 21.1717 3.77 21.3082L13.7387 26.765C13.9719 26.8935 14.2338 26.9609 14.5 26.9609C14.7662 26.9609 15.0281 26.8935 15.2613 26.765L25.23 21.3082C25.4796 21.1717 25.6879 20.9704 25.833 20.7257C25.9781 20.4809 26.0547 20.2017 26.0547 19.9171V9.08291C26.0544 8.79858 25.9778 8.51953 25.8327 8.275C25.6876 8.03046 25.4794 7.82943 25.23 7.69295ZM14.5 13.7252L5.03988 8.54596L9.4182 6.15006L14.176 8.75553C14.276 8.81026 14.3882 8.83895 14.5023 8.83895C14.6163 8.83895 14.7285 8.81026 14.8285 8.75553L19.5863 6.15006L23.9646 8.54596L14.5 13.7252ZM14.3867 3.42678C14.4201 3.40854 14.4575 3.39897 14.4955 3.39897C14.5335 3.39897 14.5709 3.40854 14.6042 3.42678L18.1613 5.37522L14.5 7.38143L10.8331 5.37522L14.3867 3.42678ZM4.30469 19.9171V15.3859L8.38281 17.6175V22.2802L4.41797 20.1154C4.38323 20.0953 4.35443 20.0664 4.33453 20.0316C4.31463 19.9967 4.30433 19.9572 4.30469 19.9171ZM9.74219 23.0278V17.2188C9.74211 17.0969 9.70927 16.9773 9.64709 16.8724C9.5849 16.7676 9.49568 16.6814 9.38875 16.6229L4.30469 13.8396V9.6935L13.8203 14.9044V25.2617L9.74219 23.0278ZM15.1797 25.2617V14.9033L24.6953 9.69237V13.8385L19.6112 16.6218C19.5042 16.6804 19.4148 16.7667 19.3526 16.8718C19.2904 16.9768 19.2577 17.0967 19.2578 17.2188V23.0278L15.1797 25.2617ZM24.582 20.1165L20.6172 22.2847V17.6209L24.6953 15.3893V19.9205C24.6951 19.9601 24.6845 19.9989 24.6646 20.033C24.6447 20.0672 24.6163 20.0956 24.582 20.1154V20.1165Z"
                                            fill="#141414"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img className="image" src={imgPerfil} alt="Imagen del Perfil" />
                </div>
                <div>
                    <ListComponent />
                </div>
            </div>
        </div>
    );
}

export default BodyComponent;
