import React from 'react';
import { Link } from "react-router-dom";
import Keys from '../../components/Keys';
import { history } from '../../history'

import './Home.css'

const Home = () => {
    const deslogarUser = () => {
        localStorage.removeItem(Keys.jsonkey);
        localStorage.removeItem('user-id');
        localStorage.removeItem('user-name');
        history.push('/')
    }
    return (
        <>
            <h1>Home Finances | Tela Principal</h1>
            <p>Seja bem vindo <strong>{localStorage.getItem('user-name')}</strong></p>
            <Link to="/details-user"><button className="Login-Btn">Meus Dados</button></Link>
            <Link to="/users"><button className="Login-Btn">Usuários</button></Link>
            <Link to="/finances"><button className="Login-Btn">Finanças</button></Link>
            <button onClick={deslogarUser} className="Login-Btn">Deslogar</button>
        </>
    )
}

export default Home;