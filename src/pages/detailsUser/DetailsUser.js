import React from 'react';
import { Link } from 'react-router-dom';

import './DetailsUser.css';

const DetailsUser = () => {

    return (
        <>
            <h1>Home Finances | Meus Dados</h1>
            <Link to='/'><button className="Login-Btn">Voltar</button></Link>
        </>
    );
};

export default DetailsUser;