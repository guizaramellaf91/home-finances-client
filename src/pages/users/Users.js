import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './Users.css';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        api.get(`/users`).then(resp => {
            const fin = JSON.parse(JSON.stringify(resp.data));
            this.setState({
                users: fin
            });
        }).catch(function (e) {
            console.log(e);
        });
    }

    render() {
        return (
            <>
                <h1>Home Finances | Usuários</h1>
                <p>Usuário cadastrados: {this.state.users.length}</p>
                <ul>
                    {
                        React.Children.toArray(
                            this.state.users.map((item, i) =>
                                <li key={i}>
                                    <p>Nome: {item.name}</p>
                                </li>
                            )
                        )
                    }
                </ul>
                <Link to='/'><button className="Login-Btn">Voltar</button></Link>
            </>
        );
    }
}

export default Users;