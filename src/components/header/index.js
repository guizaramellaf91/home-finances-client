import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dehaze } from '@material-ui/icons';
import { AreaHeader } from './styled';

function Header(props) {

    function logout(){
        window.location.reload();
    }

    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img alt="" src="./money.png"/>
                    <label>Home Finances Client</label>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Usuários</Link></li>
                        <li><Link to="/finances">Finanças</Link></li>
                        <li onClick={logout}>Sair</li>
                    </ul>
                    <div className="avatar">
                        <Link to="/detailsUser"><img src={props.user.avatar} /></Link>
                        <Link to="/detailsUser"><label>{props.user.name}</label></Link>
                    </div>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;