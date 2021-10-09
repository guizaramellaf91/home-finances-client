import React from 'react';
import { Link } from 'react-router-dom';
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
                    <label>HOME FINANCES</label>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/finances">Finances</Link></li>
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