import React from 'react';
import api from '../../services/api';
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
            <>
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
            </>
        );
    }
}

export default Users;