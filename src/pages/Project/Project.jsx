import React from 'react'
import HeaderComponent from "../../components/Header/HeaderComponent";
import ListComponent from "../../components/ListNavigation/ListComponent";
import CardComponent from '../../components/CardProject/CardComponent';

function Project() {
    return (
        <div>
            <HeaderComponent />
            <div className='px-16 mt-16'>
                <div className='flex flex-col'>
                    <h1 className="font-semibold text-6xl mb-4">Proyectos</h1>
                    <p className='font-medium mt-2'>Bienvenido a mis proyectos realizados personalmente</p>
                </div>
                <div className='flex flex-row justify-between mt-5'>
                    <div className='mb-5'>
                        <CardComponent />
                    </div>
                    <div>
                        <ListComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
