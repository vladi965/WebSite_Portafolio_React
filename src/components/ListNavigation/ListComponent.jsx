import React, { useState } from "react";
import "../../styles/StyleGeneral.css";
import { Link, useLocation } from "react-router-dom";

function ListComponent() {
    const routes = ["/", "/about", "/technology", "/project", "/contact"];
    const location = useLocation();
    const [activeTooltip, setActiveTooltip] = useState(null);

    return (
        <ul className="sticky">
            {routes.map((route, index) => (
                <li
                    key={index + 1}
                    className={`mb-5 cursor-pointer font-semibold text-custom hover:underline transition duration-3000 ${location.pathname === route ? 'underline text-active' : 'text-black'}`}
                    onMouseEnter={() => setActiveTooltip(route)}
                    onMouseLeave={() => setActiveTooltip(null)}
                >
                    <Link to={route} data-tip={getTitle(route)}>{index < 9 ? `0${index + 1}` : index + 1}</Link>
                    {activeTooltip === route && (
                        <span className="absolute right-8 z-50 transform btn-tooltip text-white text-xs p-2.5 rounded-md shadow-md opacity-100 pointer-events-none transition-opacity duration-300">{getTitle(route)}</span>
                    )}
                </li>
            ))}
        </ul>
    );
}


function getTitle(route) {
    switch (route) {
        case "/":
            return "Inicio";
        case "/about":
            return "Acerca de";
        case "/technology":
            return "Tecnología";
        case "/project":
            return "Proyectos";
        case "/contact":
            return "Contacto";
        default:
            return "";
    }
}


export default ListComponent;
