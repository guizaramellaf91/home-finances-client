import React from 'react';
import Keys from '../../components/Keys';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import api from '../../services/api';
import apiFirebase from '../../services/api-firebase';
import './styled.js';
import { AreaLogin } from './styled';
import { BtbDefaultIcons, BtnDefault } from '../../components/main/styled';
import { ArrowBackIos, Facebook } from '@material-ui/icons';
import { history } from '../../history';

export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await apiFirebase.googleLogar();
        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        api.post('user/auth/', {
            login: event.target.elements.login.value,
            password: event.target.elements.password.value
        }).then(resp => {
            const { data } = resp;
            if (data) {
                localStorage.setItem(Keys.jsonkey, data.token);
                localStorage.setItem('userid', data.userid);
                localStorage.setItem('username', data.username);
                history.push('/');
            }
        }).catch(function (e) {
            console.log(e);
            alert('Não foi possível conectar, login ou senha incorretos.');
            document.getElementById('password').value = '';
        });
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="*">
                    <AreaLogin>
                        <h1>Faça login em sua conta</h1>
                        <BtbDefaultIcons>
                            <Facebook />
                            <div className="center">Faça Login com o Facebook</div>
                        </BtbDefaultIcons>
                        <BtbDefaultIcons onClick={actionLoginGoogle}>
                            <Facebook />
                            <div className="center">Faça Login com o Google</div>
                        </BtbDefaultIcons>
                        <p>OU</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form--input">
                                <label>Login</label>
                                <input type="login" id="login" name="login" value={this} />
                            </div>
                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" id="password" name="password" value={this} />
                            </div>
                            <BtnDefault type="submit">Entrar</BtnDefault>
                            <div className="footerLogin">
                                Não tem uma conta?
                                <Link to="/register">Registre-se</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
                <Route exact path="/register">
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"><ArrowBackIos /></Link>
                            Crie sua conta</h1>
                        <p>Crie sua conta, é grátis!</p>
                        <form>
                            <div className="form--input">
                                <label>Nome</label>
                                <input type="text" />
                            </div>
                            <div className="form--input">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>
                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" />
                            </div>
                            <BtnDefault>Crie sua conta agora!</BtnDefault>
                            <div className="footerLogin">
                                Já tem uma conta?
                                <Link to="/">Faça login</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};