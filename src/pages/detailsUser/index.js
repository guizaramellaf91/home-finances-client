import React from 'react';
import moment from 'moment';
import userService from '../../services/user-service';
import { ContainerPage } from '../../components/main/Main';
import { BtbDefaultIcons } from '../../components/main/styled';
import { AreaDetailsUser } from './styled.js';

const Page = (u) => {
    
    var userExist = new Boolean(userService.userExists(u));

    function invokeRegisterUser() {   
        userService.registerExistingUser(u.user);
    }

    return (
        <ContainerPage>
            <AreaDetailsUser>
                {!u.user.registered && !userExist ? 
                    <div>
                        <h1>AVISO IMPORTANTE: Você está logado em uma conta temporária, para usar as funcionalidades do sistema, registre sua conta</h1>
                        <BtbDefaultIcons onClick={invokeRegisterUser}>clicando aqui</BtbDefaultIcons>.
                    </div>
                    : <h1>MEUS DADOS</h1>}
                <img alt="" src={u.user.avatar} />
                <p>Data de Cadastro: <b>{u.user.registered ? moment(u.user.registered).format('DD/MM/yyyy HH:mm:ss') : 'N/A'}</b></p>
                <p>ID Google: <b>{u.user.id_google}</b></p>
                <p>Nome: <b>{u.user.name ? u.user.name : 'N/A'}</b></p>
                <p>Login: <b>{u.user.login ? u.user.login : 'N/A'}</b></p>
                <p>E-mail: <b>{u.user.email ? u.user.email : 'N/A'}</b></p>
                <p>Senha: <b>{u.user.password ? u.user.password.replace(/./gi, '*') : 'N/A'}</b></p>
                <p>Situação: <b>{u.user.status ? 'Ativo' : 'Inativo'}</b></p>
            </AreaDetailsUser>
        </ContainerPage>
    );
};

export default Page;