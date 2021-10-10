import React from 'react';
import { ContainerPage } from '../../components/main/Main';
import { AreaDetailsUser } from './styled.js';

const Page = (u) => {

    return (
        <ContainerPage>
            <AreaDetailsUser>
                <p>Nome: {u.user.name}</p>
                <p>Login: {u.user.login}</p>
                <p>E-mail: {u.user.email}</p>
                <p>Senha: {u.user.password != null ?
                    u.user.password.replace(/./gi, '*') : 'N/A'}</p>
                <p>Situação: {u.user.status ? 'Ativo' : 'Inativo'}</p>
            </AreaDetailsUser>
        </ContainerPage>
    );
};

export default Page;