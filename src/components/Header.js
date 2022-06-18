// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='kepala'>
            <h1 className='judul'>Call a Friend</h1>
            <p className='anak'>Your Friendly Contact App</p>
        </div>
    )
}

export default Header;