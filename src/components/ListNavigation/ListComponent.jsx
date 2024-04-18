import React from 'react'

function ListComponent() {
    return (
        <ul>
            {[...Array(5).keys()].map((index) => (
                <li key={index + 1} className='mb-5 cursor-pointer font-semibold transition-colors hover:text-green-500 hover:underline transition duration-3000'>
                    {index < 9 ? `0${index + 1}` : index + 1}
                </li>
            ))}
        </ul>
    )
}

export default ListComponent
