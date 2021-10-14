import React, { useState } from 'react';
import moment from 'moment';
import { ContainerPage } from '../../components/main/Main';
import { AreaDetailsUser } from './styled.js';
import Modal from '../../components/modal/Modal';

function DetailsUser(u) {
    const [user] = useState(u.user);
    return (
        <ContainerPage>
            <AreaDetailsUser>
                {!user.registered ?
                    <div>
                        <h1>AVISO IMPORTANTE: Você está logado em uma conta temporária, para usar as funcionalidades do sistema, registre sua conta.</h1>
                    </div>
                    : <h1>MEUS DADOS</h1>}
                <img alt="" src={user.avatar} />
                <p>Data de Cadastro: <b>{user.registered ? moment(user.registered).format('DD/MM/yyyy HH:mm:ss') : 'N/A'}</b></p>
                <p>ID Google: <b>{user.id_google}</b></p>
                <p>Nome: <b>{user.name ? user.name : 'N/A'}</b></p>
                <p>Login: <b>{user.login ? user.login : 'N/A'}</b></p>
                <p>E-mail: <b>{user.email ? user.email : 'N/A'}</b></p>
                <p>Senha: <b>{user.password ? user.password.replace(/./gi, '*') : 'N/A'}</b></p>
                <p>Situação: <b>{user.status ? 'Ativo' : 'Inativo'}</b></p>
            </AreaDetailsUser>
            {!user.registered ? <Modal user={user} /> : ''}
        </ContainerPage>
    );
}

export default DetailsUser;