import React from 'react';
const logo = "./images/airbnb-logo.png"

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="Logo" className='nav--logo'/>
        </nav>
    )
}