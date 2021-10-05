import React from 'react';
import { Link } from 'react-router-dom';
import './Finances.css';

const Finances = () => {
    return (
        <>
            <h1>Home Finances | Finanças</h1>
            <Link to='/'><button className="Login-Btn">Voltar</button></Link>
        </>
    )
}

export default Finances;