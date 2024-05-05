import React from 'react'
import HeaderComponent from "../../components/Header/HeaderComponent";
import ScrollComponent from '../../components/ScrollAnimation/ScrollComponent';
import ListComponent from "../../components/ListNavigation/ListComponent";

function Technology() {
    return (
        <div>
            <HeaderComponent />
            <div className='flex justify-between px-16 mt-16'>
                <div className='flex flex-col'>
                    <h1 className="font-semibold text-6xl mb-4">Tecnologías</h1>
                    <div className='max-wd'>
                        <ScrollComponent />
                    </div>
                </div>
                <div>
                    <ListComponent />
                </div>
            </div>
        </div>
    )
}
export default Technology
