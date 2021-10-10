import React from 'react';
import { Link } from 'react-router-dom';
import apiFirebase from '../../services/api-firebase';
import { AreaHeader } from './styled';

function Header(props) {

    function logout() {
        window.location.reload();
    }

    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <Link to="/"><img alt="" src="./money.png" /></Link>
                    <label>HOME FINANCES</label>
                </div>
                <nav>
                    <ul>
                        <li className="liHome"><Link to="/">Home</Link></li>
                        <li><Link to="/finances">My Finances</Link></li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                    <div className="avatar">
                        <Link to="/detailsUser"><img alt="" src={props.user.avatar} /></Link>
                        <Link to="/detailsUser"><label>{props.user.name}</label></Link>
                    </div>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;