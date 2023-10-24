import React from 'react'
import headerImg from '../header.jpg'

function Header() {
    return (
        <div className="py-4 relative h-32 cyan">
            <div className='w-full h-fit'>
            <img src={headerImg} className="absolute inset-0 w-full sm:w-screen h-56 object-cover" alt='header' />
            </div>
            
        </div>
    )
}

export default Header