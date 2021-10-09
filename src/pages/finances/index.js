import React from 'react';
import api from '../../services/api';
import './styled.js';

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
            </>
        );
    }
}

export default Finances;