import React from 'react';
import api from '../../services/api';
import { ContainerPage } from '../../components/main/Main';
import { AreaUsers } from './styled';
import './styled.js';

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
            <ContainerPage>
                <AreaUsers>
                    <p>Usuário cadastrados: <b>{this.state.users.length}</b></p>
                    <ul>
                        {
                            React.Children.toArray(
                                this.state.users.map((item, i) =>
                                    <li key={i}>
                                        <p>Nome: <b>{item.name}</b></p>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </AreaUsers>
            </ContainerPage>
        );
    }
}

export default Users;