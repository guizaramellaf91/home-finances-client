import React from 'react';
import { ContainerPage } from '../../components/main/Main';
import { AreaDetailsUser } from './styled.js';

const Page = (u) => {

    return (
        <ContainerPage>
            <AreaDetailsUser>
                <p>Nome: <b>{u.user.name}</b></p>
                <p>Login: <b>{u.user.login}</b></p>
                <p>E-mail: <b>{u.user.email}</b></p>
                <p>Senha: <b>{u.user.password != null ?
                    u.user.password.replace(/./gi, '*') : 'N/A'}</b></p>
                <p>Situação: <b>{u.user.status ? 'Ativo' : 'Inativo'}</b></p>
            </AreaDetailsUser>
        </ContainerPage>
    );
};

export default Page;