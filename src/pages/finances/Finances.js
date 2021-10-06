import React from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './Finances.css';

class Finances extends React.Component {
    constructor(props) {
        super(props);
        this.state = { finances: [] };
    }

    componentDidMount() {
        api.get(`/finances`).then(resp => {
            const fin = JSON.parse(JSON.stringify(resp.data));
            this.setState({
                finances: fin
            });
        }).catch(function (e) {
            console.log(e);
        });
    }

    render() {
        return (
            <>
                <h1>Home Finances | Minhas Finanças</h1>
                <ul>
                    {
                        React.Children.toArray(
                            this.state.finances.map((item, i) =>
                                <li key={i}>
                                    <p>Descrição: {item.description}</p>
                                    <p>Valor: {item.price}</p>
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

export default Finances;