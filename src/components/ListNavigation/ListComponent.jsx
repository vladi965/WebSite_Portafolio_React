import React from "react";
import "../../styles/StyleGeneral.css";
import { Link, useLocation } from "react-router-dom";

function ListComponent() {
    const routes = ["/", "/about", "/technology", "/project", "/contact"];
    const location = useLocation();

    return (
        <ul className="sticky">
            {routes.map((route, index) => (
                <li
                    key={index + 1}
                    className={`mb-5 cursor-pointer font-semibold text-custom hover:underline transition duration-3000 ${location.pathname === route ? 'underline text-active' : 'text-black'}`}
                >
                    <Link to={route}>{index < 9 ? `0${index + 1}` : index + 1}</Link>
                </li>
            ))}
        </ul>
    );
}

export default ListComponent;
