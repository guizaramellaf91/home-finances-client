import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styled.js';

class DetailsUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            login: '',
            email: '',
            password: '',
            status: false
        };
    }

    componentDidMount() {
        api.get(`/user/${localStorage.getItem('user-id')}`).then(resp => {
            if (resp) {
                const user = JSON.parse(JSON.stringify(resp.data));
                this.setState({
                    name: user.name,
                    login: user.login,
                    email: user.email,
                    password: user.password,
                    status: user.status
                });
            }
        }).catch(function (e) {
            console.log(e);
        });
    }

    render() {
        const u = this.state;
        return (
            <>
                <h1>Home Finances | Meus Dados</h1>
                <p>Nome: {u.name}</p>
                <p>Login: {u.login}</p>
                <p>E-mail: {u.email}</p>
                <p>Senha: {u.password.replace(/./gi,'*')}</p>
                <p>Situação: {u.status ? 'Ativo' : 'Inativo'}</p>
                <Link to='/'><button className="Login-Btn">Voltar</button></Link>
            </>
        );
    }
}

export default DetailsUser; 