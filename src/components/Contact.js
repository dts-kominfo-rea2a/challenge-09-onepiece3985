// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';
const Contact = ({data}) => {
    return (
        <div className='kolomKontak'>
            <div className='kolomFoto'>
                <img src={data.photo} alt={`Ini foto ${data.name}`} />
            </div>
            <div className='kolomData'>
                <h1>{data.name}</h1>
                <p className='telepon'>{data.phone}</p>
                <p className='email'>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;