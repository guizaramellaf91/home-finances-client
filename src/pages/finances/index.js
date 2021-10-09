import React from 'react';
import api from '../../services/api';
import { ContainerPage } from '../../components/main/Main';
import { AreaFinances } from './styled.js';

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
            <ContainerPage>
                <AreaFinances>
                    <p>Registros financeiros: <b>{this.state.finances.length}</b></p>
                    <ul>
                        {
                            React.Children.toArray(
                                this.state.finances.map((item, i) =>
                                    <li key={i}>
                                        <p>Descrição: {item.description}</p>
                                        <p>Valor: <b>{item.price}</b></p>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </AreaFinances>
            </ContainerPage>
        );
    }
}

export default Finances;