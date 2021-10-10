import React from 'react';
import { Link } from 'react-router-dom';
import { AreaHeader } from './styled';
import { emptyimg } from '../Keys';

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
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/finances">Finances</Link></li>
                        <li onClick={logout}>Logout</li>
                    </ul>
                    <div className="avatar">
                        <Link to="/detailsUser"><img alt="" src={props.user.avatar != null ? props.user.avatar : emptyimg} /></Link>
                        <Link to="/detailsUser"><label>{props.user.name}</label></Link>
                    </div>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;